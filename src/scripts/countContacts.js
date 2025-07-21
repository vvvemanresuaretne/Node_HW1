import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`📦 Кількість контактів: ${count}`);
    return count;
  } catch (error) {
    console.error('❌ Помилка при підрахунку контактів:', error.message);
  }
};

// Аналог `require.main === module` для ES-модуля:
if (import.meta.url === `file://${process.argv[1]}`) {
  countContacts();
}
