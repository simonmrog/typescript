import { setOnce } from "./decorators";

class Person {
  @setOnce()
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("John");
console.log(person.name);
person.name = "John Doe"; // this will throw an error
console.log(person);
