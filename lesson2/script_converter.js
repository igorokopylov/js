// Написать конвертор валют.
// Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
//  и получает в ответ соответствующую сумму.

$('document').ready(function () {
    const result = document.querySelector('.result');
    const rates = {
        EUR: 0.85,
        UAH: 27.72,
        AZN: 1.7
    };
    $('.btn').click(function () {
        result.value = $('.input').val() * rates[$('.select').val()];
    });
});