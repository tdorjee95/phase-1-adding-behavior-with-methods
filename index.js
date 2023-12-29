// Your code here
// Class for Cat
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Class for Dog
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Class for Bird
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }

  // Creating instances
let fluffy = new Cat("Fluffy", "female");
let max = new Dog("Max", "male");
let polly = new Bird("Polly", "male");
let tweetie = new Bird("Tweetie", "female");

// Calling speak method
console.log(fluffy.speak());
// Output: Fluffy says meow!

console.log(max.speak());
// Output: Max says woof!

console.log(polly.speak());
// Output: It's me! Polly, the parrot!

console.log(tweetie.speak());
// Output: Tweetie says squawk!