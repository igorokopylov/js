// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let abcde = prompt('Введите пятизначное число');

var x = abcde; //12321
var a = Math.floor(x / 10000); //1
var y = x - a * 10000; //2321
var b = Math.floor(y / 1000); //2
var z = y - b * 1000; //321
var c = Math.floor(z / 100); //3
var w = z - c * 100; //21
var d = Math.floor(w / 10); //2
var e = w - d * 10; //1

if (abcde > 0 && abcde <= 9999) {
    console.log('Вы ввели слишком маленькое число! Введите пятизначное!');
}
else if (abcde >= 100000) {
    console.log('Вы ввели слишком большое число! Введите пятизначное!');
}
else if (a == e && b == d) {
    console.log('Палиндром!');
}
else {
    console.log('Обычное число!');
}