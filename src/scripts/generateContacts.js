import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (count) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];

    for (let i = 0; i < count; i++) {
      const fakeContact = createFakeContact();
      newContacts.push(fakeContact);
    }

    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(`✅ Додано ${count} нових контактів. Загальна кількість: ${updatedContacts.length}`);
  } catch (error) {
    console.error('❌ Помилка при генерації контактів:', error.message);
  }
};

// Якщо файл запускається напряму
if (import.meta.url === `file://${process.argv[1]}`) {
  const count = parseInt(process.argv[2], 10) || 5;
  generateContacts(count);
}
