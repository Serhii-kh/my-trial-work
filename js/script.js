const Name = 'Serhii Naboka'
let age = 39
let boo = true

const header = document.querySelector('#header')
const headerLinks = document.querySelectorAll('.header__nav-link')
const heroBtn = document.querySelector('#hero__btn')

// console.log(headerLinks)

function sayHello() {
  let message = 'Hello ' + Name
  // console.log(message)
}

sayHello()

function Math(a, b) {
  let result = a + b
  return result
}

let sum = Math(22, 33)

// console.log(sum)

window.addEventListener('scroll', checkScroll)

document.addEventListener('DOMContentLoaded', checkScroll)

function checkScroll() {
  let scrollPos = window.scrollY
  if (scrollPos > 0) {
    header.classList.add('pink')
  } else {
    header.classList.remove('pink')
  }
}

heroBtn.addEventListener('click', function () {
  console.log('clicked')
})

for (let navItem of headerLinks) {
  navItem.addEventListener('click', function () {
    console.log(navItem.text)
  })
}

let clientCounter = 18
const maxClients = 25

while (clientCounter <= maxClients) {
  // console.log(clientCounter)
  clientCounter += 1
}

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

for (let i = 100; i >= 20; i -= 20) {
  console.log(i)
}
