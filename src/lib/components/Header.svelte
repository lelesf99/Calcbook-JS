<script lang="ts">
	import { tooltip } from '$lib/attachments/tooltip.js';
	import Button from '$lib/components/Button.svelte';
	import CheckboxInput from '$lib/components/CheckboxInput.svelte';
	import PillNav from '$lib/components/PillNav.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import { asciiToEbcdic, ebcdicToAscii } from '$lib/encoding/ebcdic';
	import { buffer, model, records, setRecords } from '$lib/stores/editor.store';
	import Download from '@lucide/svelte/icons/download';
	import FileUp from '@lucide/svelte/icons/file-up';
	import { get } from 'svelte/store';

	const importOptions = [
		{ name: 'fixed-blocked', label: 'Tamanho fixo' },
		{ name: 'line-by-line', label: 'Linha a linha' }
	];
	const encoder = new TextEncoder();
	const decoder = new TextDecoder('ascii');
	let importMode = $state('line-by-line');
	let exportChecked = $state(true);
	function dumpHex(bytes: Uint8Array) {
		console.log(
			Array.from(bytes)
				.map((b) => b.toString(16).padStart(2, '0'))
				.join(' ')
		);
	}
	async function importFile() {
		if (!$model) {
			alert('Carregue um copybook antes de importar.');
			return;
		}

		const input = document.createElement('input');
		input.type = 'file';
		input.accept = '.txt,.dat';

		input.onchange = async () => {
			const file = input.files?.[0];
			if (!file) return;

			const recordLength = $model.recordLength;
			let records: Uint8Array[] = [];

			// -------------------------------
			// IMPORTAÇÃO TEXTO (ASCII)
			// -------------------------------
			if (file.name.endsWith('.txt')) {
				const text = await file.text();
				records = splitLineRecords(text, recordLength);
			}
			// -------------------------------
			// IMPORTAÇÃO BINÁRIA (EBCDIC)
			// -------------------------------
			else {
				const ebcdicBytes = new Uint8Array(await file.arrayBuffer());
				dumpHex(ebcdicBytes);

				records = splitFixedRecords(ebcdicBytes, recordLength);
			}

			if (!records.length) {
				alert('Nenhum registro encontrado no arquivo.');
				return;
			}

			setRecords(records);
		};

		input.click();
	}
	function exportFile() {
		if (!$records.length || !$model) {
			alert('Nada para exportar.');
			return;
		}

		const recordLength = $model.recordLength;

		// -------------------------------
		// EXPORTAÇÃO TEXTO (ASCII)
		// -------------------------------
		if (exportChecked) {
			const text = $records.map((r) => decoder.decode(r)).join('\n');

			downloadBlob(text, 'records.txt', 'text/plain');
			return;
		}

		// -------------------------------
		// EXPORTAÇÃO BINÁRIA (EBCDIC)
		// -------------------------------
		const totalLength = recordLength * $records.length;
		const asciiOut = new Uint8Array(totalLength);

		$records.forEach((rec, i) => {
			asciiOut.set(rec, i * recordLength);
		});

		// 🔑 CONVERSÃO AQUI
		const ebcdicOut = asciiToEbcdic(asciiOut);

		downloadBlob(ebcdicOut.buffer as ArrayBuffer, 'records.dat', 'application/octet-stream');
	}

	function downloadBlob(data: string | ArrayBuffer, filename: string, type: string) {
		const blob = new Blob([data], { type });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		a.remove();

		URL.revokeObjectURL(url);
	}
	function splitFixedRecords(bytes: Uint8Array, recordLength: number): Uint8Array[] {
		const records: Uint8Array[] = [];

		for (let i = 0; i < bytes.length; i += recordLength + 16) {
			const rec = new Uint8Array(recordLength);
			rec.fill(0x20); // espaço
			rec.set(bytes.slice(i, i + recordLength));
			records.push(rec);
		}

		return records;
	}
	function splitLineRecords(text: string, recordLength: number): Uint8Array[] {
		const lines = text.replace(/\r/g, '').split('\n');
		const records: Uint8Array[] = [];

		for (const line of lines) {
			if (!line) continue;

			const fixed =
				line.length < recordLength ? line.padEnd(recordLength, ' ') : line.slice(0, recordLength);

			records.push(new TextEncoder().encode(fixed));
		}

		return records;
	}
</script>

<header>
	<h1>Calcbook SV</h1>
	<!-- Controles de importação -->
	<PillNav>
		<RadioGroup bind:selected={importMode} options={importOptions} />
		<Button onclick={importFile} {@attach tooltip('Importar arquivo a ser editado')}>
			<FileUp size={16} strokeWidth={3} />
			Importar
		</Button>
	</PillNav>
	<!-- Controles de exportação -->
	<PillNav>
		<CheckboxInput bind:checked={exportChecked}>TXT</CheckboxInput>
		<Button
			onclick={exportFile}
			{@attach tooltip(`Salvar arquivo editado como ${exportChecked ? 'TXT' : '.dat'}`)}
		>
			<Download size={16} strokeWidth={3} />
			Download
		</Button>
	</PillNav>
</header>

<style>
	header {
		gap: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 1rem;
	}
</style>
