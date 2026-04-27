const ASCII_TO_EBCDIC = new Uint8Array(256).fill(0x3f); // default = SUB

// Controle básico
ASCII_TO_EBCDIC[0x00] = 0x00;
ASCII_TO_EBCDIC[0x01] = 0x01;
ASCII_TO_EBCDIC[0x02] = 0x02;
ASCII_TO_EBCDIC[0x03] = 0x03;
ASCII_TO_EBCDIC[0x04] = 0x1a;
ASCII_TO_EBCDIC[0x05] = 0x09;
ASCII_TO_EBCDIC[0x06] = 0x1a;
ASCII_TO_EBCDIC[0x07] = 0x7f;
ASCII_TO_EBCDIC[0x08] = 0x1a;
ASCII_TO_EBCDIC[0x09] = 0x1a;
ASCII_TO_EBCDIC[0x0a] = 0x1a;
ASCII_TO_EBCDIC[0x0b] = 0x0b;
ASCII_TO_EBCDIC[0x0c] = 0x0c;
ASCII_TO_EBCDIC[0x0d] = 0x0d;

// Espaço
ASCII_TO_EBCDIC[0x20] = 0x40;

// Dígitos
for (let i = 0; i <= 9; i++) {
	ASCII_TO_EBCDIC[0x30 + i] = 0xf0 + i;
}

// Letras maiúsculas
for (let i = 0; i < 26; i++) {
	ASCII_TO_EBCDIC[0x41 + i] = i < 9 ? 0xc1 + i : i < 18 ? 0xd1 + (i - 9) : 0xe2 + (i - 18);
}

// Letras minúsculas
for (let i = 0; i < 26; i++) {
	ASCII_TO_EBCDIC[0x61 + i] = i < 9 ? 0x81 + i : i < 18 ? 0x91 + (i - 9) : 0xa2 + (i - 18);
}

ASCII_TO_EBCDIC[0x7b] = 0xc0;
ASCII_TO_EBCDIC[0x7d] = 0xd0;
ASCII_TO_EBCDIC[0x41] = 0xc1;
ASCII_TO_EBCDIC[0x42] = 0xc2;
ASCII_TO_EBCDIC[0x43] = 0xc3;
ASCII_TO_EBCDIC[0x44] = 0xc4;
ASCII_TO_EBCDIC[0x45] = 0xc5;
ASCII_TO_EBCDIC[0x46] = 0xc6;
ASCII_TO_EBCDIC[0x47] = 0xc7;
ASCII_TO_EBCDIC[0x48] = 0xc8;
ASCII_TO_EBCDIC[0x49] = 0xc9;
ASCII_TO_EBCDIC[0x4a] = 0xd1;
ASCII_TO_EBCDIC[0x4b] = 0xd2;
ASCII_TO_EBCDIC[0x4c] = 0xd3;
ASCII_TO_EBCDIC[0x4d] = 0xd4;
ASCII_TO_EBCDIC[0x4e] = 0xd5;
ASCII_TO_EBCDIC[0x4f] = 0xd6;
ASCII_TO_EBCDIC[0x50] = 0xd7;
ASCII_TO_EBCDIC[0x51] = 0xd8;
ASCII_TO_EBCDIC[0x52] = 0xd9;


const EBCDIC_TO_ASCII = new Uint8Array(256).fill(0x3f); // '?'

// Controles básicos (opcional)
EBCDIC_TO_ASCII[0x00] = 0x00;
EBCDIC_TO_ASCII[0x0A] = 0x0A;
EBCDIC_TO_ASCII[0x0D] = 0x0D;

// Espaço
EBCDIC_TO_ASCII[0x40] = 0x20;

// Dígitos
for (let i = 0; i <= 9; i++) {
    EBCDIC_TO_ASCII[0xF0 + i] = 0x30 + i;
}

// Letras maiúsculas
const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (let i = 0; i < 9; i++) EBCDIC_TO_ASCII[0xC1 + i] = UC.charCodeAt(i);
for (let i = 9; i < 18; i++) EBCDIC_TO_ASCII[0xD1 + (i - 9)] = UC.charCodeAt(i);
for (let i = 18; i < 26; i++) EBCDIC_TO_ASCII[0xE2 + (i - 18)] = UC.charCodeAt(i);

// Letras minúsculas
const LC = "abcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < 9; i++) EBCDIC_TO_ASCII[0x81 + i] = LC.charCodeAt(i);
for (let i = 9; i < 18; i++) EBCDIC_TO_ASCII[0x91 + (i - 9)] = LC.charCodeAt(i);
for (let i = 18; i < 26; i++) EBCDIC_TO_ASCII[0xA2 + (i - 18)] = LC.charCodeAt(i);


export function asciiToEbcdic(input: Uint8Array): Uint8Array {
	const out = new Uint8Array(input.length);
	for (let i = 0; i < input.length; i++) {
		out[i] = ASCII_TO_EBCDIC[input[i]];
	}
	return out;
}

export function ebcdicToAscii(input: Uint8Array): Uint8Array {
	const out = new Uint8Array(input.length);
	for (let i = 0; i < input.length; i++) {
		out[i] = EBCDIC_TO_ASCII[input[i]];
	}
	return out;
}