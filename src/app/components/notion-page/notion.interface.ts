export interface Block {
    "3316869a-d425-492c-9024-bc3ceb62e3bb": The3316869AD425492C9024Bc3Ceb62E3Bb;
    "e9c95945-794e-462d-92fe-07e34d26b368": E9C95945794E462D92Fe07E34D26B368;
    "19ffbcd0-3e15-4511-a6b2-c9af6b93c5c7": The19Ffbcd03E154511A6B2C9Af6B93C5C7;
    "b4ee41d0-0ccd-44f2-bbb9-227ed0e55c87": The08063_F6CE41A4_Ad0A9C274_E43673B0A5;
    "e9ca3585-0e6e-43e5-8e5e-2e3960460a68": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "d2522a3c-b99c-4ded-93cd-17088217f037": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "d4ceb4fb-d77e-4087-a5bb-f439ce651958": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "e60931f3-3057-4e0b-8c0e-292dea0aad91": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "d4b73e9a-8784-4ed3-b710-16c1f2b92eb3": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "05af5b33-a608-4a6a-93ab-9bd2e1880e4f": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "b01447a7-9229-40ea-a608-87de25c869d7": The08063_F6CE41A4_Ad0A9C274_E43673B0A5;
    "66e25cb4-e946-48ad-a7ac-41415fdb3c82": The08063_F6CE41A4_Ad0A9C274_E43673B0A5;
    "f2c234e3-ab44-4ef7-8721-51057b9ed50c": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "fe5bc06e-620d-472f-ae4a-8ad380674bb1": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "04a10ca2-a531-4a59-a9e8-f2dbb7ef8776": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "619f77e1-fb90-45b4-8c18-1ec8af203b2d": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "592de30a-aa9a-4954-9b48-2f660fd31c2c": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "3e8f76e2-51d4-4e00-bb49-df6965f3b338": The08063_F6CE41A4_Ad0A9C274_E43673B0A5;
    "568791b9-cf2f-4b92-bd0d-2324df50e9b1": The568791B9Cf2F4B92Bd0D2324Df50E9B1;
    "08063f6c-e41a-4ad0-a9c2-74e43673b0a5": The08063_F6CE41A4_Ad0A9C274_E43673B0A5;
    "b85256c8-7556-48eb-b32d-e0ee8488eef6": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "f47efd44-45fc-4bdf-b422-3d849c15c846": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
    "c7c413d6-e533-4191-a4d3-f39e402ddce3": The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776;
}

export interface The04_A10Ca2A5314_A59A9E8F2Dbb7Ef8776 {
    value: The04A10Ca2A5314A59A9E8F2Dbb7Ef8776Value;
    role: Role;
}

export enum Role {
    Reader = "reader",
}

export interface The04A10Ca2A5314A59A9E8F2Dbb7Ef8776Value {
    id: string;
    version: number;
    type: string;
    properties: PurpleProperties;
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: ParentTable;
    alive: boolean;
    space_id: string;
}

export enum ParentTable {
    Block = "block",
}

export interface PurpleProperties {
    title: Array<string[]>;
}

export interface The08063_F6CE41A4_Ad0A9C274_E43673B0A5 {
    value: The08063F6CE41A4Ad0A9C274E43673B0A5Value;
    role: Role;
}

export interface The08063F6CE41A4Ad0A9C274E43673B0A5Value {
    id: string;
    version: number;
    type: string;
    properties?: FluffyProperties;
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: ParentTable;
    alive: boolean;
    space_id: string;
}

export interface FluffyProperties {
    title: Array<Array<Array<string[]> | string>>;
}

export interface The19Ffbcd03E154511A6B2C9Af6B93C5C7 {
    value: The19Ffbcd03E154511A6B2C9Af6B93C5C7Value;
    role: Role;
}

export interface The19Ffbcd03E154511A6B2C9Af6B93C5C7Value {
    id: string;
    version: number;
    type: string;
    properties: PurpleProperties;
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: ParentTable;
    alive: boolean;
    space_id: string;
    content?: string[];
    format?: PurpleFormat;
}

export interface PurpleFormat {
    ai_prompt_key: string;
    ai_last_edited: number;
}

export interface The3316869AD425492C9024Bc3Ceb62E3Bb {
    value: The3316869AD425492C9024Bc3Ceb62E3BbValue;
    role: Role;
}

export interface The3316869AD425492C9024Bc3Ceb62E3BbValue {
    id: string;
    version: number;
    type: string;
    properties: TentacledProperties;
    content: string[];
    format: FluffyFormat;
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: string;
    alive: boolean;
    copied_from: string;
    file_ids: string[];
    space_id: string;
}

export interface FluffyFormat {
    copied_from_pointer: Pointer;
    social_media_image_preview_url: string;
}

export interface Pointer {
    id: string;
    table: string;
    spaceId: string;
}

export interface TentacledProperties {
    Wfxa: Array<string[]>;
    "\\<eW": Array<string[]>;
    "{2o?": Array<string[]>;
    "{Nt5": Array<Array<Array<string[]> | string>>;
    title: Array<string[]>;
}

export interface The568791B9Cf2F4B92Bd0D2324Df50E9B1 {
    value: The568791B9Cf2F4B92Bd0D2324Df50E9B1Value;
    role: Role;
}

export interface The568791B9Cf2F4B92Bd0D2324Df50E9B1Value {
    id: string;
    version: number;
    type: string;
    properties: StickyProperties;
    format: TentacledFormat;
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: ParentTable;
    alive: boolean;
    space_id: string;
}

export interface TentacledFormat {
    code_wrap: boolean;
}

export interface StickyProperties {
    title: Array<string[]>;
    language: Array<string[]>;
}

export interface E9C95945794E462D92Fe07E34D26B368 {
    value: E9C95945794E462D92Fe07E34D26B368Value;
    role: Role;
}

export interface E9C95945794E462D92Fe07E34D26B368Value {
    id: string;
    version: number;
    type: string;
    view_ids: string[];
    collection_id: string;
    format: StickyFormat;
    permissions: Permission[];
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: ParentTable;
    alive: boolean;
    copied_from: string;
    file_ids: string[];
    space_id: string;
}

export interface StickyFormat {
    site_id: string;
    collection_pointer: Pointer;
    copied_from_pointer: Pointer;
    social_media_image_preview_url: string;
}

export interface Permission {
    role: string;
    type: string;
    user_id?: string;
    added_timestamp?: number;
}
