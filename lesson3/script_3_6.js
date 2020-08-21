// Зациклить калькулятор.
// Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, 
// хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.

let firstMath = prompt('Калькулятор: Напишите первое число');
let symbolMath = prompt('Калькулятор: Напишите арифметический знак (+, -, *, -');
let secondMath = prompt('Калькулятор: Напишите второе число');
let answerMath;

while (firstMath != null || symbolMath != null) {
    while (secondMath != null) {

        if (symbolMath == '+') {
            answerMath = firstMath - (- secondMath);
            console.log('Ответ:', firstMath, symbolMath, secondMath, '=', answerMath);
        }
        else if (symbolMath == '-') {
            answerMath = firstMath - secondMath;
            console.log('Ответ:', firstMath, symbolMath, secondMath, '=', answerMath);
        }
        else if (symbolMath == '*') {
            answerMath = firstMath * secondMath;
            console.log('Ответ:', firstMath, symbolMath, secondMath, '=', answerMath);
        }
        else if (symbolMath == '/') {
            answerMath = firstMath / secondMath;
            console.log('Ответ:', firstMath, symbolMath, secondMath, '=', answerMath);
        }
        else {
            answerMath = 'Выбрано неправильное арифметическое действие. Выберите из +, -, *, /';
        };

        firstMath = prompt('Калькулятор: Напишите первое число');
        symbolMath = prompt('Калькулятор: Напишите арифметический знак (+, -, *, -');
        secondMath = prompt('Калькулятор: Напишите второе число');

    };
};
console.log('Калькулятор отключен!');