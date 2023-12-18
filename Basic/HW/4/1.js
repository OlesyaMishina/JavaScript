"use strict";

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

const isEven = (num) => {
    if (num === 0) {
        console.log(`${num} - это ноль`);
    } else if (num % 2 === 1) {
        console.log(`${num} - нечетное число`);
    } else {
        console.log(`${num} - четное число`);
    }
}

for (let index = 0; index < 11; index++) {
    isEven(index);
}