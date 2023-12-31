// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function thirdDegree(num) {
    console.log(num ** 3);
}

thirdDegree(2);
thirdDegree(0);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы 
// за вычетом налогов равен значение"

function salaryWithoutTax(salary) {
    if (!Number.isFinite(salary))
        console.log("Значение задано неверно")
    else console.log(`Размер заработной платы за вычетом налогов равен ${salary * 0.87}`)
}

salaryWithoutTax(100)
salaryWithoutTax("text")

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function searchMaxNumber(num1, num2) {
    (num1 > num2) ? console.log(num1) : console.log(num2);
}

searchMaxNumber(2, 6);
searchMaxNumber(2, 2);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций 
// (каждая функция выполняет одну из них):
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть 
// из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, 
// проверки на NaN, Infinity делать не нужно

// 1. Сложение
const summation = (num1, num2) => num1 + num2;

console.log(summation(2, 5));

// 2. Разность
const difference = (num1, num2) => (num1 > num2) ? (num1 - num2) : (num2 - num1);

console.log(difference(2, 6));
console.log(difference(6, 6));

// 3. Умножение
const multiplication = (num1, num2) => num1 * num2;

console.log(multiplication(5, 5));
console.log(multiplication(5, 0));

// 4. Деление

const division = (num1, num2) => (num2 !== 0) ? num1 / num2 : "На ноль делить нельзя!";

console.log(division(5, 2));
console.log(division(5, 0));