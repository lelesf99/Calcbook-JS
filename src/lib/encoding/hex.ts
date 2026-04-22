export function toHex(u8) {
	let s = '';
	for (let i = 0; i < u8.length; i++) s += u8[i].toString(16).toUpperCase().padStart(2, '0');
	return s;
}
export function hexToBytes(hex) {
	const clean = hex.replace(/\s+/g, '').toUpperCase();
	const out = new Uint8Array(Math.ceil(clean.length / 2));
	for (let i = 0, j = 0; i < clean.length; i += 2, j++) {
		out[j] = parseInt(clean.slice(i, i + 2).padEnd(2, '0'), 16) & 0xff;
	}
	return out;
}
