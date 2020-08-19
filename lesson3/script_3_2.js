// Запросить 2 числа и найти только наибольший общий делитель.

let firstNumber = prompt('Напишите первое любое число');
let secondNumber = prompt('Напишите второе любое число');
let m; //большее число
let n; //меньшее число

// Определение наибольшего числа из двух

if (Number(firstNumber) > Number(secondNumber)) {
    m = Number(firstNumber);
    n = Number(secondNumber);
}
else if (Number(firstNumber) < Number(secondNumber)) {
    m = Number(secondNumber);
    n = Number(firstNumber);
}
else {
    console.log('Числа равны!');
};

// Создание массива

let massiv = [m, n];  //массив

// Алгоритм Евклида

console.log(massiv[massiv.length - 2]); //предпоследний элемент массива
console.log(massiv[massiv.length - 1]); //последний элемент массива

while (massiv[massiv.length - 1] > 0) {
    r = massiv[massiv.length - 2] % massiv[massiv.length - 1];
    massiv.push(r);
    console.log(r);
};

console.log('Общий наибольший делитель:', massiv[massiv.length - 2]);