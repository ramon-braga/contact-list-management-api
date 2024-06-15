import { readFile, writeFile } from "fs/promises";

export const dataSource = './data/list.txt';

export async function getContacts() {
    let list: string[] = [];
    try {
        const data = await readFile(dataSource, { encoding: 'utf-8' });
        list = data.split('\n');
    } catch (err) {}

    return list;
}

export async function createContact(name: string) {
    let list = await getContacts();
    list.push(name);
    await writeFile(dataSource, list.join('\n'));
}

export async function deleteContact(name: string) {
    let list = await getContacts();
    list = list.filter(item =>
        item.toLocaleLowerCase() !== name.toLocaleLowerCase()
    );
    await writeFile(dataSource, list.join('\n'));
}