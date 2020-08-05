// Запросить дату (день, месяц, год) и вывести следующую за ней дату.
//  Учтите возможность перехода на следующий месяц, год, а также високосный год.

let dateyear = prompt('Введи дату интересующего тебя дня и я подскажу тебе дату дня, следующего за ним... Сначала введи год:');
let datemonth = prompt('Теперь месяц:');
let dateday = prompt('А день какой?:');

var nextday = Number(dateday) + 1;
var nextmonth = Number(datemonth) + 1;
var nextyear = Number(dateyear) + 1;

//для всех месяцев
if (dateday <= 27) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
//январь - 31 день
else if (datemonth == 01 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 01 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 01 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В январе 31 день!');
}
//февраль - 28 дней (29 в высокосный год)
else if (datemonth == 02 && dateday == 28) {
    if (dateyear % 4 != 0 || dateyear % 100 == 0) {
        if (dateyear % 400 != 0) { // Обычный!
            console.log('Число:');
            console.log('01');
            console.log('Месяц:');
            console.log(nextmonth);
            console.log('Год:');
            console.log(dateyear);
        }
    }
    else { // Высокосный!
        console.log('Число:');
        console.log(nextday);
        console.log('Месяц:');
        console.log(datemonth);
        console.log('Год:');
        console.log(dateyear);
    }
}
else if (datemonth == 02 && dateday == 29) {
    if (dateyear % 4 != 0 || dateyear % 100 == 0) {
        if (dateyear % 400 != 0) { // Обычный!
            console.log('Вы неправильно ввели дату! Этот год не высокосный');
        }
    }
    else { // Высокосный!
        console.log('Число:');
        console.log('01');
        console.log('Месяц:');
        console.log(nextmonth);
        console.log('Год:');
        console.log(dateyear);
    }
}
else if (datemonth == 02 && dateday > 29) {
    console.log('Вы неправильно ввели дату! В феврале 28 дней (29 в высокосный год)');
}
//март - 31 день
else if (datemonth == 03 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 03 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 03 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В марте 31 день!');
}
//апрель - 30 дней
else if (datemonth == 04 && dateday <= 29) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 04 && dateday == 30) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 04 && dateday > 30) {
    console.log('Вы неправильно ввели дату! В апреле 30 дней!');
}
//май - 31 день
else if (datemonth == 05 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 05 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 05 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В мае 31 день!');
}
//июнь - 30 дней
else if (datemonth == 06 && dateday <= 29) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 06 && dateday == 30) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 06 && dateday > 30) {
    console.log('Вы неправильно ввели дату! В июне 30 дней!');
}
//июль - 31 день
else if (datemonth == 07 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 07 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 07 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В июле 31 день!');
}
//август - 31 день
else if (datemonth == 08 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 08 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 08 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В августе 31 день!');
}
//сентябрь - 30 дней
else if (datemonth == 09 && dateday <= 29) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 09 && dateday == 30) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 09 && dateday > 30) {
    console.log('Вы неправильно ввели дату! В сентябре 30 дней!');
}
//октябрь - 31 день
else if (datemonth == 10 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 10 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 10 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В октябре 31 день!');
}
//ноябрь - 30 дней
else if (datemonth == 11 && dateday <= 29) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 11 && dateday == 30) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log(nextmonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 11 && dateday > 30) {
    console.log('Вы неправильно ввели дату! В ноябре 30 дней!');
}
//декабрь - 31 день
else if (datemonth == 12 && dateday <= 30) {
    console.log('Число:');
    console.log(nextday);
    console.log('Месяц:');
    console.log(datemonth);
    console.log('Год:');
    console.log(dateyear);
}
else if (datemonth == 12 && dateday == 31) {
    console.log('Число:');
    console.log('01');
    console.log('Месяц:');
    console.log('01');
    console.log('Год:');
    console.log(nextyear);
}
else if (datemonth == 12 && dateday > 31) {
    console.log('Вы неправильно ввели дату! В декабре 31 день!');
}
else {
    console.log('Вы неправильно ввели дату!');
}

//Корзина

// console.log('Месяц:');
// if (dateday == 31) {
//     if (datemonth == 12) {
//         console.log('01');
//     }
//     else {
//         console.log(nextmonth);
//     }
// }
// else {
//     console.log(datemonth);
// }

// console.log('Год:');
// if (datemonth == 12 && dateday == 31) {
//     console.log(nextyear);
// }
// else {
//     console.log(dateyear);
// }
// проверка правильности ввода даты

// if (dateyear <= 10000) {
//     console.log('Год введен верно!');
// }
// else {
//     console.log('Вы неправильно ввели год!');
// }

// if (datemonth <= 12) {
//     console.log('Месяц введен верно!');
// }
// else {
//     console.log('Вы неправильно ввели месяц!');
// }

// if (datemonth == 01 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 02 && dateday <= 28) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 03 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 04 && dateday <= 30) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 05 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 06 && dateday <= 30) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 07 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 08 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 09 && dateday <= 30) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 10 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 11 && dateday <= 30) {
//     console.log('День введен верно!');
// }
// else if (datemonth == 12 && dateday <= 31) {
//     console.log('День введен верно!');
// }
// else {
//     console.log('Вы неправильно ввели день!');
// }
