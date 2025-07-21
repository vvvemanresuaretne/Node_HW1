const { readContacts } = require('../utils/readContacts');

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('📋 Список контактів:', contacts);
    return contacts;
  } catch (error) {
    console.error('❌ Помилка при отриманні контактів:', error.message);
  }
};

if (require.main === module) {
  getAllContacts();
}

module.exports = {
  getAllContacts,
};
