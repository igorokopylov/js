// Запросить у пользователя число и вывести все делители этого числа.

let userNumber = prompt('Запросить у пользователя число и вывести все делители этого числа. Напишите любое натуральное число');

let divider = userNumber;    // потенциальные делители
let answer = [];             // массив для сбора делителей

while (divider > 0) {
    if (userNumber % divider == 0) {
        answer.push(divider);
    }
    divider--;
};

console.log(answer);
