const input = document.querySelector('.input');

const button = document.querySelector('.button');

const resultDiv = document.querySelector('.result');

function calculateDate() {
    const currentDate = Date.now();
    const birthDate = Date.parse(input.value);
    const dateDiff = birthDate - currentDate;
    const daysUntil = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    return daysUntil;
}

function checkDay(number) {
    if (number > 10 && [11, 12, 13, 14].includes(number%100))
        return 'дней';
    lastNum = number%10;
    if (lastNum == 1)
        return 'день';
    if ([2,3,4].includes(lastNum))
        return 'дня';
    if ([5,6,7,8,9,0].includes(lastNum))
        return 'дней';
}

function checkDate() {
if (input.value == '') {
    resultDiv.textContent = 'Пожалуйста, введите дату рождения';
    }
else {
    resultDiv.textContent = `До вашего дня рождения осталось ${calculateDate()}
    ${checkDay(calculateDate())}`;
    }
}

button.addEventListener('click', checkDate);