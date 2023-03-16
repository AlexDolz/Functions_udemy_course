'use strict';

// **************************** Functions Default Parameters *************

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123'); //{ flightNum: 'LH123', numPassengers: 1, price: 199 }

// createBooking('LH123', 2, 800); //{ flightNum: 'LH123', numPassengers: 2, price: 800 }

// createBooking('LH123', 5); // { flightNum: 'LH123', numPassengers: 5, price: 995 }

// createBooking('LH123', undefined, 1000); // we cant skip argument, we need to set simple to undefined and its shows by default

// ********************* Functions How passing arguments works, Value vs Reference ***************************************************************

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 23435465757,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 23435465757) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...

// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// ********************Higher order functions *********Callback********************************************************

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord); // Transformed string: JAVASCRIPT is the best!

// transformer('JavaScript is the best!', oneWord); // Transformed string: javascriptisthebest!

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('✋');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);
