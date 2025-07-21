

const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../helpers/createFakeContact');

const generateContacts = async (count) => {
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

// Якщо файл виконується напряму, запускаємо функцію з аргументом
if (require.main === module) {
  const count = parseInt(process.argv[2], 10) || 5;
  generateContacts(count);
}

module.exports = {
  generateContacts,
};
