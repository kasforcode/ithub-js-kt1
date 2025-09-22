/*  
В программе объявлены две переменные — price и range. 
Переменная range может принимать одно из трех строковых значений — month/day/week. 
Переменная price хранит в себе числовое значение. 
Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону: 
<значение price> Р в <эквивалент значения range на русском языке> 

Пример значений переменных: 
let price = 10000 
let range = "day" 

Пример результата:
10000 Р в день
*/

const price = Number(prompt('Доход'))
const range = prompt('Промежуток времени (month, day, week)')


if(isNaN(price)) {
    throw new Error ('Доход введен некорректно')
}

if(range !== 'month' && range !== 'day' && range !== 'week') {
    throw new Error ('Промежуток времени введет некорректно')
}

let rangeinRussian;
if (range === "month") { 
    rangeinRussian = "месяц";
} else if (range === "day") {
    rangeinRussian = "день";
} else if (range === "week") {
    rangeinRussian = "неделю";
} 

const formattedPrice = price.toLocaleString('ru', {
    style: "currency", 
    currency: "RUB"
})

const result  =`${formattedPrice}  в ${rangeinRussian}`
console.log(result)