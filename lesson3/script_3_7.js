// Запросить у пользователя число и на сколько цифр его сдвинуть.
// Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

console.log("Запросить у пользователя число и на сколько цифр его сдвинуть.");
console.log("Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).");

let anyNumberToSwap = prompt('Введите любое число');
let howManySwap = prompt('На сколько цифр сдвинуть число?');

// например дано число 123456, сдвиг - 2

let a = Math.pow(10, howManySwap);
// 10 ^ 2 = 100

let b = Math.floor(anyNumberToSwap / a);
// 123456 / 100 = 1234,56. Округлено до 1234

let c = b * a;
// 1234 * 100 = 123400

let d = anyNumberToSwap - c;
// 123456 - 123400 = 56

let e = anyNumberToSwap.length;
// длинна числа = 6

let f = Math.pow(10, (e - howManySwap));
// 10 ^ (6 - 2) = 10000

let answer = d * f + b;
// 56 * 10000 + 1234 = 561234

console.log(answer);
