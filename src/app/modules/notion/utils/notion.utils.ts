import { NotionBlock } from '../types/notion.interface';

export const getBlockImageURL = (image: string, block: NotionBlock) => {
    const url = new URL(
        `https://www.notion.so/image/${encodeURIComponent(image)}`
    );
    if (block) {
        const table =
            block.parent_table === 'space' ? 'block' : block.parent_table;
        url.searchParams.set('table', table);
        url.searchParams.set('id', block.id);
        url.searchParams.set('cache', 'v2');
    }
    return url.toString();
};
