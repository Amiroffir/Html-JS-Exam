export class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  printName() {
    console.log(this.firstName + " " + this.lastName);
  }
  printAge() {
    console.log(this.age);
  }
}
