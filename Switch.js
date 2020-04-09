/* 1)Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
 */

let num = 6;
let result;

switch (num) {
    case 1:
      result = 'Зима';
      break;
    case 2:
      result =  'Весна';
      break;
    case 3:
      result =  'Лето';
      break;
    case 4:
      result = 'Оcень';
      break;
    default:
      result = 'Дичь';
} alert (result);
