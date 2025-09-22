/*Задана переменная word со строковым значением. Создайте переменную result с условием: 
если из длины переменной word вычисляется квадратный корень (без дробной части) - 
переменная result должна содержать ответ 1, в противном случае - 0 
 
Пример: 
let word = 'меню' 
Результат: 
1
*/

const word = prompt('Ваше слово')
const wordLenght = word.length

sqrtword = Math.floor(Math.sqrt(wordLenght))

let result

if(sqrtword === Math.sqrt(wordLenght))
{
    result = 1
} else {
    result = 0
}

console.log(result)