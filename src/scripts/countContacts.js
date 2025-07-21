const { readContacts } = require('../utils/readContacts');

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`📦 Кількість контактів: ${count}`);
    return count;
  } catch (error) {
    console.error('❌ Помилка при підрахунку контактів:', error.message);
  }
};

if (require.main === module) {
  countContacts();
}

module.exports = {
  countContacts,
};
