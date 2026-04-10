const DEFAULT_ENDIAN = 'little';

export function unpackBinaryNumeric(u8, signed = false, decimals = 0, endian = DEFAULT_ENDIAN) {
	const arr = new Uint8Array(8);
	if (endian === 'little') arr.set(u8, 0);
	else arr.set(u8, 8 - u8.length);
	const dv = new DataView(arr.buffer);
	let bi;
	switch (u8.length) {
		case 1:
			bi = BigInt(arr[0]);
			if (signed && bi > 0x7fn) bi = BigInt((arr[0] << 24) >> 24);
			break;
		case 2:
			bi = signed
				? BigInt(dv.getInt16(0, endian === 'little'))
				: BigInt(dv.getUint16(0, endian === 'little'));
			break;
		case 4:
			bi = signed
				? BigInt(dv.getInt32(0, endian === 'little'))
				: BigInt(dv.getUint32(0, endian === 'little'));
			break;
		default:
			bi = signed
				? dv.getBigInt64(0, endian === 'little')
				: dv.getBigUint64(0, endian === 'little');
	}
	if (decimals > 0) {
		const neg = bi < 0n,
			abs = neg ? -bi : bi,
			tenPow = 10n ** BigInt(decimals);
		const intPart = abs / tenPow,
			decPart = (abs % tenPow).toString().padStart(decimals, '0');
		return (neg ? '-' : '') + intPart.toString() + '.' + decPart;
	}
	return bi.toString();
}
export function packBinaryNumeric(
	valueStr,
	byteLen,
	signed = false,
	decimals = 0,
	endian = DEFAULT_ENDIAN
) {
	let s = String(valueStr).trim(),
		neg = false;
	if (s.startsWith('-')) {
		neg = true;
		s = s.slice(1);
	}
	let [iRaw = '0', dRaw = ''] = s.split('.');
	iRaw = iRaw.replace(/\D/g, '') || '0';
	dRaw = dRaw.replace(/\D/g, '').padEnd(decimals, '0').slice(0, decimals);
	let bi = BigInt(iRaw + dRaw);
	if (neg && bi !== 0n) bi = -bi;
	let min, max;
	if (signed) {
		const bits = BigInt(byteLen * 8);
		min = -(1n << (bits - 1n));
		max = (1n << (bits - 1n)) - 1n;
	} else {
		min = 0n;
		max = (1n << BigInt(byteLen * 8)) - 1n;
	}
	if (bi < min) bi = min;
	if (bi > max) bi = max;
	const arr = new Uint8Array(byteLen),
		dv = new DataView(arr.buffer);
	if (byteLen === 1) dv.setUint8(0, Number(neg ? (256n + bi) % 256n : bi));
	else if (byteLen === 2)
		signed
			? dv.setInt16(0, Number(bi), endian === 'little')
			: dv.setUint16(0, Number(bi), endian === 'little');
	else if (byteLen === 4)
		signed
			? dv.setInt32(0, Number(bi), endian === 'little')
			: dv.setUint32(0, Number(bi), endian === 'little');
	else
		signed
			? dv.setBigInt64(0, bi, endian === 'little')
			: dv.setBigUint64(0, bi, endian === 'little');
	return arr;
}
