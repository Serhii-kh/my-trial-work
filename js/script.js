// const Name = 'Serhii Naboka'
// let age = 39
// let boo = true

const header = document.querySelector('#header')
// const headerLinks = document.querySelectorAll('.header__nav-link')
const heroBtn = document.querySelector('#hero__btn')

// // console.log(headerLinks)

// function sayHello() {
//   let message = 'Hello ' + Name
//   // console.log(message)
// }

// sayHello()

// function Math(a, b) {
//   let result = a + b
//   return result
// }

// let sum = Math(22, 33)

// // console.log(sum)

// window.addEventListener('scroll', checkScroll)

// document.addEventListener('DOMContentLoaded', checkScroll)

// function checkScroll() {
//   let scrollPos = window.scrollY
//   if (scrollPos > 0) {
//     header.classList.add('pink')
//   } else {
//     header.classList.remove('pink')
//   }
// }

// heroBtn.addEventListener('click', function () {
//   console.log('clicked')
// })

// for (let navItem of headerLinks) {
//   navItem.addEventListener('click', function () {
//     console.log(navItem.text)
//   })
// }

// let clientCounter = 18
// const maxClients = 25

// while (clientCounter <= maxClients) {
//   // console.log(clientCounter)
//   clientCounter += 1
// }

// let balance = 10000
// const payment = 2000
// let balanceNew = balance - payment
// let balanceMsg = 'you have ' + balanceNew + ' credits'
// const alertMsg = 'Cheking your balance'
// alert(alertMsg)

// if (balance > payment) {
//   console.log(balanceMsg)
// } else {
//   console.log('you have not costs')
// }

// const totalSpent = 2000
// let payment = 500
// let discount

// if (totalSpent >= 100 && totalSpent <= 1000) {
//   discount = 0.02
// } else if (totalSpent > 1000 && totalSpent <= 5000) {
//   discount = 0.05
// } else if (totalSpent > 5000) {
//   discount = 0.1
// } else {
//   discount = 0
// }

// let paymentNew = payment - payment * discount
// console.log(paymentNew)

// for (let i = 100; i >= 20; i -= 20) {
//   console.log(i)
// }

// function calculateTotal(number) {
// 	let sum = 0
	
//   for (let i = 10; i <= number; i += 10) {
//     sum += i
//   }
//   return sum
// }

// console.log(calculateTotal(40));

// function findLongestWord(string) {
//   const array = string.split(' ')
//   let longestWord = array[0]

//   for (let i = 1; i < array.length; i += 1) {
//     if (longestWord.length < array[i].length) {
//       longestWord = array[i]
//     }
//   }
//   return longestWord
// }

// console.log(findLongestWord('My name is Serhii'))


// function getCommonElements(array1, array2) {

// let array = [];
//   for (let i = 0; i < array2.length; i += 1) {
//      if (array1.includes(array2[i])) {
//        array.push(array2[i])
//      }
// 	}
	
// return array
// };

// console.log(getCommonElements([24, 12, 27, 3], [24, 8, 3, 36, 2]));



// function includes(array, value) {

// for (const elem of array ) {
//   if (elem === value) return true;
// 	}
// 	return false
// };

// console.log(includes([1, 2, 3, 4, 6], 5));


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// highTemperatures.icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg";

// const { yesterday: highYesterday,
// 	today: highToday,
// 	tomorrow: highTomorrow,
// 	highIcon: icon } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);









