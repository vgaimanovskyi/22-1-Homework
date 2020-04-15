/*
// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const name = prompt("Enter your name");
alert(`Hello, ${name}`);

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const year = Number(prompt("Enter your birthday year"));
const today = 2020;
alert(today - year);

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const side = Number(prompt("Enter side length"));
const result = 4 * side;
console.log("P = " + result);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const r = Number(prompt("Enter radius"));
const pi = 3.14;
const S = pi * r * r;
console.log("Circle square is " + S);

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const s = Number(prompt("Enter distance in km"));
const t = Number(prompt("Enter time in hours"));
const v = s / t;
console.log(`Your speed should be ${v} km/h`);

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const usd = Number(prompt("Enter $ sum"));
const convert = 0.92;
const eur = usd * convert;
console.log(`Your ${usd}$ now is ${eur}€`);

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const capacity = Number(prompt("Indicate the capacity of flash drive in GB"));
const file = 820 / 1024; // файл в гб
const q = capacity % file; // остаток
const result = (capacity - q) / file;
console.log(result);

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const money = Number(prompt("Enter how much money do you have"));
const chocolate = Number(prompt("Enter how much does one chocolate cost"));
const change = money % chocolate;
const number = (money - change) / chocolate;
console.log(`You can buy ${number} chocolate(s) and your change is ${change} unit(s)`);

// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const number = Number(prompt("Enter xxx number"));
const third = number % 10;
const second = (number % 100 - third) / 10;
const first = (number - number % 100) / 100;
const reversNumber = Number(String(third) + String(second) + String(first));
console.log(reversNumber);

// 10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const PV = Number(prompt("Enter Present Value"));
const time = 2; // месяц
const per = 5;  // %
const ppm = (2 / 12) * (5 / 100); // процетны на месяц
const FV = PV * (1 + ppm);
const result = FV - PV;
console.log(`Your will earn ${result} inits`);
*/