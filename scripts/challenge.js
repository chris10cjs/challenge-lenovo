/*
1) Create a function that receives an array of positive integers
    and returns an array with only the input’s pair numbers.
    For example:
    [INPUT]  array = [1 2 3 4];
    [OUTPUT] array = [2, 4];
*/

function getPairNumbers(array) {
  const arrayPairNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) arrayPairNumbers.push(array[i]);
  }
  return arrayPairNumbers;
}

console.log(getPairNumbers([1, 2, 3, 4]));

/*
2) Create a function that receives a String as parameter
   and returns a Boolean value indicating if the word is a palindrome* or not.

   *a word or group of words that is the same when you read it forwards from
    the beginning or backwards from the end: "Refer" and "level" are palindromes.
*/

function isPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    let last = string[string.length - 1 - i];
    let first = string[i];
    if (first !== last) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('level'));

/*
3) Using any JavaScript object creation pattern,
   create a Car object with the following attributes and methods:
    **  Attributes
    *  String: make *  String: model *  boolean: turnedOn *  int: engineDisplacement (cylinder volume)
    *  int: year

    **  Methods:
    *  boolean: isOn() *  void: turnOn() *  void: turnOff() 
    *   *  String: toString() [returns year, make, model and the engine displacement (cc)]
    *   *  String: getMarketingData() [returns make, model and year]
*/

class Car {
  constructor(make, model, year, engineDisplacement) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineDisplacement = engineDisplacement;
    this.turnedOn = false;
  }
  isOn() {
    return this.turnedOn;
  }
  turnOn() {
    this.turnedOn = true;
  }
  turnOff() {
    this.turnedOn = false;
  }
  toString() {
    return `${this.year} ${this.make} ${this.model} ${this.engineDisplacement}cc`;
  }
  getMarketingData() {
    return `${this.make} ${this.model} ${this.year}`;
  }
}

/*
4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no methods.
 Instantiate it and print to the console its internal state calling the getMarketingData method from the Car object.
*/

const Bicycle = {
  make: 'Bicycle',
  model: 'Bicycle2021',
  year: 2021,
};

const bicycle = new Car(Bicycle.make, Bicycle.model, Bicycle.year);
console.log(bicycle.getMarketingData());
