import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('⚠️ Контактів для видалення немає.');
      return;
    }

    contacts.pop();
    await writeContacts(contacts);

    console.log('✅ Останній контакт успішно видалено.');
  } catch (error) {
    console.error('❌ Помилка при видаленні останнього контакту:', error.message);
  }
};

// Запуск напряму
if (import.meta.url === `file://${process.argv[1]}`) {
  removeLastContact();
}
