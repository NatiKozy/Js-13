//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date('1990-10-10');
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date('2023-12-17');
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const difference = Math.floor((futureDate - currentDate) / (1000*60*60*24))
console.log(difference);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date('2023-11-01');
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
// const difference2 = Math.floor((currentDate - pastDate) / (1000*60*60*24));
const difference2 = currentDate.getDate() - pastDate.getDate();
console.log(difference2);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date('2023-11-14');
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentYear + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date(`${futureYear}-10-10`);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const difference3 = futureYear - currentYear;
console.log(difference3);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date1 = new Date(Date.parse(strDate));
console.log(date1);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const date2 = Date.parse(strDate);
console.log(date2);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const fixDate = new Date(Date.parse(date));
if (fixDate == NaN) {
    console.log('Неправильный формат даты')
} else {
    console.log('Правильный формат даты')
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0 ) {
    console.log('Число положительное')
} else {
    console.log('Число отрицательное');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 == 0 ) {
    console.log('Число четное')
} else {
    console.log('Число нечетное');
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 == 0 ) {
    console.log('Число кратно 3')
} else {
    console.log('Число не кратно 3');
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number < 10  ) {
    console.log('Число однозначное')
} else {
    console.log('Число не однозначное');
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number < 100  ) {
    console.log('Число двузначное')
} else {
    console.log('Число не двузначное');
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0 || number == 0  ) {
    console.log('Число положительное или 0')
} else {
    console.log('Число не положительное или не 0');
};


//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0 || number % 7 == 0 ) {
    console.log('Число кратно 5 или 7')
} else {
    console.log('Число не кратно 5 или 7');
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0 || number == 0  ) {
    console.log('Число отрицательное или 0')
} else {
    console.log('Число положительное или 0');
};

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number < 1000 && number > 0  ) {
    console.log('Число положительное трехзначное')
} else {
    console.log('Число не положительное и не трехзначное');
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let num = '';
switch(new Date().getDay()) {
    case 1:
        num = 'Понедельник'
        break;
    case 2:
        num = 'Вторник';
        break;
    case 3:
        num = 'Среда';
        break;
    case 4:
        num = 'Четверг';
        break;
    case 5:
        num = 'Пятница';
        break;
    case 6:
        num = 'Суббота';
        break;
    case 7:
        num = 'Воскресенье';
        break;
}
console.log(`Сегодня ${num.toLowerCase()}`);


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'S';
let fullName;

switch (direction) {
    case 'N':
        fullName = 'North';
        break;
    case 'W':
        fullName = 'West';
        break;
    case 'S':
        fullName = 'South';
        break;
    case 'E':
        fullName = 'East';
        break;
}
console.log(`Полное название ${direction} - ${fullName}`)