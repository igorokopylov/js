// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
// За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

let question1 = prompt('Чему равняется число Пи? Ответ 1: 2.72. Ответ 2: 3.14. Ответ 3: 7.62.');
let question2 = prompt('Столица Украины? Ответ 1: Киев. Ответ 2: Париж. Ответ 3: Лондон.');
let question3 = prompt('Город корабелов? Ответ 1: Херсон. Ответ 2: Одесса. Ответ 3: Николаев.');

switch (Number(question1)) {
    case 1:
        var x = 0;
        console.log('Вопрос 1: Неправильно. Засчитано 0 баллов.');
        break;
    case 2:
        var x = 2;
        console.log('Вопрос 1: Правильно! Засчитано 2 балла.');
        break;
    case 3:
        var x = 0;
        console.log('Вопрос 1: Неправильно. Засчитано 0 баллов.');
        break;
    default:
        console.log('Вопрос 1: Введен некорректный ответ.');
        break;
}
switch (Number(question2)) {
    case 1:
        var y = 2;
        console.log('Вопрос 2: Правильно! Засчитано 2 балла.');
        break;
    case 2:
        var y = 0;
        console.log('Вопрос 2: Неправильно. Засчитано 0 баллов.');
        break;
    case 3:
        var y = 0;
        console.log('Вопрос 2: Неправильно. Засчитано 0 баллов.');
        break;
    default:
        console.log('Вопрос 2: Введен некорректный ответ.');
        break;
}
switch (Number(question3)) {
    case 1:
        var z = 0;
        console.log('Вопрос 3: Неправильно. Засчитано 0 баллов.');
        break;
    case 2:
        var z = 0;
        console.log('Вопрос 3: Неправильно. Засчитано 0 баллов.');
        break;
    case 3:
        var z = 2;
        console.log('Вопрос 3: Правильно! Засчитано 2 балла.');
        break;
    default:
        console.log('Вопрос 3: Введен некорректный ответ');
        break;
}
console.log('Всего набрано баллов:');
console.log(x + y + z);

if ((x + y + z) === 6) {
    console.log('ПОБЕДА');
}
else {
    console.log('Учи матчасть...');
}