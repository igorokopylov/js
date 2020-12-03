// Запросить у пользователя число и вывести все делители этого числа.

console.log("ЗАДАЧА");
console.log("Запросить у пользователя число и вывести все делители этого числа.");

let userNumber = prompt('Напишите любое натуральное число');

let divider = userNumber;    // потенциальные делители
let answer = [];             // массив для сбора делителей

while (divider > 0) {
    if (userNumber % divider == 0) {
        answer.push(divider);
    }
    divider--;
};

console.log("ОТВЕТ");
console.log(answer);
