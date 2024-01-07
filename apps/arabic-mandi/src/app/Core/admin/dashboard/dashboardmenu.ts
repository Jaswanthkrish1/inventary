export interface DashBoardNode {
    name: string;
    url?: string;
    children?: DashBoardNode[];
}
const parentRoute = 'admin/dashboard'
export const DashBoardTree_DATA: DashBoardNode[] = [
    {
        name: 'Item',
        children: [{ name: 'ViewItem', url: 'add_item/View' }, { name: 'AddItem' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];