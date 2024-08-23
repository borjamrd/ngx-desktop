export interface NotionBlock {
    id: string;
    version: number;
    type: NotionBlockType;
    properties: Properties;
    content?: string[];
    created_time: number;
    last_edited_time: number;
    parent_id: string;
    parent_table: string;
    alive: boolean;
    space_id: string;
}

export interface Properties {
    title: Array<string[]>;
}


export type NotionBlockType = 'page' | 'collection_view_page' | 'header' | 'sub_header' | 'sub_sub_header' | 'text' | 'bulleted_list' | 'numbered_list' | 'quote' | 'divider' | 'code' | 'to_do'
