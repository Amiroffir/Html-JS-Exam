import { Person } from "./Person.js";

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  printGrade() {
    console.log(this.grade);
  }
}
