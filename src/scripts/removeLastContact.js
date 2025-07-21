const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');

const removeLastContact = async () => {
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

if (require.main === module) {
  removeLastContact();
}

module.exports = {
  removeLastContact,
};
