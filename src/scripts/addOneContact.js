const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../helpers/createFakeContact');

const addOneContact = async () => {
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

if (require.main === module) {
  addOneContact();
}

module.exports = {
  addOneContact,
};
