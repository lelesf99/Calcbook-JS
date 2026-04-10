import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Não esqueça do CSS!

import type { Attachment } from 'svelte/attachments';

export function tooltip(content: string): Attachment {
	return (element: HTMLElement) => {
		// Forçamos o tippy a retornar uma única instância em vez de array
		const instance = tippy(element, {
			content,
			hideOnClick: false,
			interactive: true,
			trigger: 'focus'
		});

		// O Svelte espera que você retorne uma função de limpeza (cleanup)
		return () => {
			console.log('cleanup', instance);
			if (Array.isArray(instance)) {
				instance.forEach((i) => i.destroy());
			} else {
				instance.destroy();
			}
		};
	};
}
