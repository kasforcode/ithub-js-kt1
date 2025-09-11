const minNumber = + prompt('Минимальная граница')
const maxNumber = Number(prompt('Максимальная граница'))
const result = Math.round(Math.random()*(maxNumber - minNumber))+minNumber

console.log('Случайное число в диапазоне [',minNumber,';', maxNumber,'] :', result)

const outputString = `Случайное число в диапазоне [${minNumber} ; ${maxNumber}] : ${result}`
//const outputString = 'Случайное число в диапазоне [' + String(minNumber) + '; ' + String(maxNumber) + '] : ' + String(result)
console.log(outputString)