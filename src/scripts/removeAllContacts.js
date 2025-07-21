const { writeContacts } = require('../utils/writeContacts');

const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('🗑️ Усі контакти успішно видалено.');
  } catch (error) {
    console.error('❌ Помилка при видаленні контактів:', error.message);
  }
};

if (require.main === module) {
  removeAllContacts();
}

module.exports = {
  removeAllContacts,
};
