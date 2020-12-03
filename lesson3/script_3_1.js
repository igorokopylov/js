// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let someNumber = prompt('Задача: Подсчитать сумму всех чисел в заданном пользователем диапазоне. Напишите число');
let together = 0;

while (Number(someNumber) > 0) {
    together = together + Number(someNumber);
    someNumber--;
}
console.log("Задача: Подсчитать сумму всех чисел в заданном пользователем диапазоне.");
console.log(together);
