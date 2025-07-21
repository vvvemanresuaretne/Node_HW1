import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);
    await writeContacts(contacts);
    console.log('✅ Один контакт успішно додано.');
  } catch (error) {
    console.error('❌ Помилка при додаванні контакту:', error.message);
  }
};

// Аналог `require.main === module` в ES-модулях:
if (import.meta.url === `file://${process.argv[1]}`) {
  addOneContact();
}
