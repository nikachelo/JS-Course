"use strict";

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;

//   console.log(name, age);
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.age);
// };

// const jonas = new Person("Jonas", 5);
// console.log(jonas.__proto__);

//class expression
// const peronCl = class{

// }

//class declaration
// class personCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// const jessica = new personCl("Jessica", 1997);
// console.log(jessica);

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// account.latest = 100;
// console.log(account.movements);
// console.log(account.latest);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// const tesla = new EV("Tesla", 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);

// class Person {
//   constructor(fullName, bithYear) {
//     this.fullName = fullName;
//     this.bithYear = bithYear;
//   }
//   calcAge() {
//     console.log(2037 - this.bithYear);
//   }
//   greet() {
//     console.log(`Hello ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.bithYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// class Student extends Person {
//   constructor(fullName, bithYear, course) {
//     // Always needs to happen first!
//     super(fullName, bithYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`Hello, my name is ${this.fullName}`);
//   }
// }

// const Niko = new Student("Nikoi Chelo", 2002, "CS");
// Niko.introduce();

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log("Thanks for opening account");
  }

  deposit(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this._movements.push(-val);
  }

  approveLoan(val) {
    return true;
  }

  askLoan(val) {
    if (this.approveLoan) {
      this.deposit(val);
      console.log(`Loan approved: ${val}`);
    }
  }
}
