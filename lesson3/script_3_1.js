// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

console.log("ЗАДАЧА");
console.log("Подсчитать сумму всех чисел в заданном пользователем диапазоне.");

let someNumber = prompt('Напишите число');
let together = 0;

while (Number(someNumber) > 0) {
    together = together + Number(someNumber);
    someNumber--;
}

console.log("ОТВЕТ");
console.log(together);
