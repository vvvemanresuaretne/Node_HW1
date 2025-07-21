



const fs = require('fs/promises');
const { PATH_DB } = require('../constants/contacts');

const writeContacts = async (data) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Помилка при записі у файл:', error.message);
    throw error;
  }
};

module.exports = {
  writeContacts,
};
