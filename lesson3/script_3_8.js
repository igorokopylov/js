// Зациклить вывод дней недели таким образом:
// «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

console.log("Зациклить вывод дней недели таким образом:");
console.log("«День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.");

let whatIsNextDayOfWeek = prompt('Какой сегодня по счету день недели?');

while (whatIsNextDayOfWeek != null) {
    if (whatIsNextDayOfWeek == 1) {
        console.log('Завтра вторник. Ахх(');
    }
    else if (whatIsNextDayOfWeek == 2) {
        console.log('Завтра среда. Экватор');
    }
    else if (whatIsNextDayOfWeek == 3) {
        console.log('Завтра четверг - она же маленькая пятница');
    }
    else if (whatIsNextDayOfWeek == 4) {
        console.log('Завтра пятница - развратница))');
    }
    else if (whatIsNextDayOfWeek == 5) {
        console.log('Завтра суббота - продолжение пятницы');
    }
    else if (whatIsNextDayOfWeek == 6) {
        console.log('Завтра воскресенье. Надо отойти(...');
    }
    else if (whatIsNextDayOfWeek == 7) {
        console.log('Завтра понедельник. Держись...');
    }
    else {
        console.log('Увы(... В неделе 7 дней)).');
    };
    whatIsNextDayOfWeek = prompt('Какой сегодня по счету день недели?');
};
