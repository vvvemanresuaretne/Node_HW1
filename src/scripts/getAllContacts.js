import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('📋 Список контактів:', contacts);
    return contacts;
  } catch (error) {
    console.error('❌ Помилка при отриманні контактів:', error.message);
  }
};

// Якщо файл запускається напряму
if (import.meta.url === `file://${process.argv[1]}`) {
  getAllContacts();
}
