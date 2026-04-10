const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder('ascii');

export function unpackField(buffer, field) {
	const bytes = buffer.slice(field.offset, field.offset + field.byteLength);
	const s = textDecoder.decode(bytes);

	// COMP/BINARY/COMP-5 -> show HEX/Value handled in renderForm
	// COMP-3 -> handled in renderForm
	if (field.pic?.type === 'NUMERIC') {
		if (field.pic.decimals) {
			const d = field.pic.decimals;
			if (s.trim() === '') return '';
			const iPart = s.slice(0, s.length - d);
			const dPart = s.slice(s.length - d);
			return `${iPart}.${dPart}`.replace(/\.$/, '');
		}
		return s.replace(/[\u0000 ]+$/g, '');
	}
	// ALPHA
	return s.replace(/[\u0000 ]+$/g, '');
}

export function packField(buffer, field, value) {
	let text = '';
	const len = field.byteLength;
	if (field.pic?.type === 'NUMERIC') {
		if (field.pic.decimals) {
			const d = field.pic.decimals;
			const [iRaw, dRaw = ''] = String(value).split('.');
			const iLen = field.byteLength - d;
			const iStr = (iRaw ?? '').replace(/\D/g, '').padStart(iLen, ' ').slice(-iLen);
			const dStr = (dRaw ?? '').replace(/\D/g, '').padEnd(d, ' ').slice(0, d);
			text = iStr + dStr;
		} else {
			const digits = String(value).replace(/\D/g, '');
			text = digits.padStart(len, ' ').slice(-len);
		}
	} else {
		text = String(value);
	}
	buffer.set(textEncoder.encode(text.padEnd(len, ' ')), field.offset);
}
