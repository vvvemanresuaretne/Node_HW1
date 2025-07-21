import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (data) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Помилка при записі у файл:', error.message);
    throw error;
  }
};
