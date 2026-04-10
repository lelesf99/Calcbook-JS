function normalizeDecimalInputForComp3(str, decimals) {
	let s = String(str ?? '').trim(),
		neg = false;
	if (s.startsWith('-')) {
		neg = true;
		s = s.slice(1);
	}
	s = s.replace(/[^\d.]/g, '');
	if (decimals === 0) s = s.replace(/\./g, '');
	else {
		const p = s.indexOf('.');
		if (p >= 0) s = s.slice(0, p + 1) + s.slice(p + 1).replace(/\./g, '');
	}
	let intPart = s,
		decPart = '';
	if (decimals > 0 && s.includes('.')) {
		const parts = s.split('.');
		intPart = parts[0] || '0';
		decPart = parts[1] || '';
	}
	intPart = intPart.replace(/\D/g, '') || '0';
	if (decimals > 0) decPart = decPart.replace(/\D/g, '').padEnd(decimals, '0').slice(0, decimals);
	return { neg, intPart, decPart };
}
function buildPackedFromDigits(digits, byteLen, signNibble) {
	let nibbles = digits.split('').map((d) => d.charCodeAt(0) - 48);
	nibbles.push(signNibble & 0x0f);
	if (nibbles.length % 2 === 1) nibbles.unshift(0);
	const out = new Uint8Array(byteLen);
	for (let i = byteLen - 1, ni = nibbles.length - 1; i >= 0; i--) {
		const lo = nibbles[ni--] ?? 0,
			hi = nibbles[ni--] ?? 0;
		out[i] = ((hi & 0x0f) << 4) | (lo & 0x0f);
	}
	return out;
}
export function packComp3(str, byteLen, decimals = 0) {
	const { neg, intPart, decPart } = normalizeDecimalInputForComp3(str, decimals);
	const digits = decimals > 0 ? intPart + decPart : intPart || '0';
	const signNibble = neg ? 0x0d : 0x0c; // positive 0x0C/0x0F; we use 0x0C
	return buildPackedFromDigits(digits, byteLen, signNibble);
}
function trimLeadZerosKeepOne(numStr) {
	return numStr.replace(/^0+(?=\d)/, '') || '0';
}
function formatImpliedDecimal(digits, decimals, neg) {
	if (!digits) return '';
	if (decimals > 0) {
		const intPart = digits.slice(0, Math.max(0, digits.length - decimals)) || '0';
		const decPart = digits.slice(-decimals).padStart(decimals, '0');
		return (neg ? '-' : '') + trimLeadZerosKeepOne(intPart) + '.' + decPart;
	}
	return (neg ? '-' : '') + trimLeadZerosKeepOne(digits);
}
export function unpackComp3(u8, decimals = 0) {
	if (!u8 || u8.length === 0) return '';
	let digits = '';
	for (let i = 0; i < u8.length - 1; i++) {
		const b = u8[i];
		digits += String((b >> 4) & 0x0f) + String(b & 0x0f);
	}
	const last = u8[u8.length - 1];
	const lastHi = (last >> 4) & 0x0f;
	const signNibble = last & 0x0f;
	const neg = signNibble === 0x0d;
	digits += String(lastHi);
	return formatImpliedDecimal(digits, decimals, neg);
}
