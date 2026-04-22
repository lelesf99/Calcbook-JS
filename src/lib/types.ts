export type PicType = 'ALPHA' | 'NUMERIC';

export type Pic = {
	raw: string;
	type: PicType;
	length: number;
	decimals?: number;
	signed?: boolean;
};

export interface CopybookNode {
	level: number;
	name: string;
	isFiller: boolean;
	pic?: Pic;
	occurs?: { times: number };
	redefines?: string;
	usage?: string;
	children: CopybookNode[];
}

export interface FieldResolved extends CopybookNode {
	offset: number;
	byteLength: number;
	variantPath?: { group: string; member: string }[];
}

export interface ResolvedModel {
	root: CopybookNode[];
	fieldsFlat: FieldResolved[];
	recordLength: number;
	redefineGroups: Record<string, string[]>;
	nameIndex: number;
}

export type FieldKind =
    | 'DISPLAY'
    | 'COMP-1'
    | 'COMP-2'
    | 'COMP-3'
    | 'BINARY';
