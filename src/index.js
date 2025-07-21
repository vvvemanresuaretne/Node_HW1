import readline from 'readline';
import { addOneContact } from './src/scripts/addOneContact.js';
import { generateContacts } from './src/scripts/generateContacts.js';
import { getAllContacts } from './src/scripts/getAllContacts.js';
import { countContacts } from './src/scripts/countContacts.js';
import { removeLastContact } from './src/scripts/removeLastContact.js';
import { removeAllContacts } from './src/scripts/removeAllContacts.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = `
===== 📇 Меню контактів =====
1. Додати один контакт
2. Згенерувати кілька контактів
3. Показати всі контакти
4. Порахувати кількість контактів
5. Видалити останній контакт
6. Видалити всі контакти
0. Вийти
==============================
Введіть номер опції: `;

const main = () => {
  rl.question(menu, async (choice) => {
    switch (choice.trim()) {
      case '1':
        await addOneContact();
        break;
      case '2':
        rl.question('Скільки контактів згенерувати? ', async (count) => {
          await generateContacts(Number(count));
          rl.close();
        });
        return;
      case '3':
        await getAllContacts();
        break;
      case '4':
        await countContacts();
        break;
      case '5':
        await removeLastContact();
        break;
      case '6':
        await removeAllContacts();
        break;
      case '0':
        console.log('👋 До побачення!');
        rl.close();
        return;
      default:
        console.log('❌ Невідома опція.');
    }

    main(); // Запустить снова после выполнения
  });
};

main();
