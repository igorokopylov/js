// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let discount = prompt('Введите сумму покупки');

var a = discount;

if (a > 0 && a <= 200) {
    var b = 1;
    console.log('Цена со скидкой:');
    console.log(a * b);
}
else if (a > 200 && a <= 300) {
    var b = 0.97;
    console.log('Цена со скидкой:');
    console.log(a * b);
}
else if (a > 300 && a <= 500) {
    var b = 0.95;
    console.log('Цена со скидкой:');
    console.log(a * b);
}
else {
    var b = 0.93;
    console.log('Цена со скидкой:');
    console.log(a * b);
}