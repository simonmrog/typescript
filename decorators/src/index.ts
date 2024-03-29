import { firstClassDecorator, firstMethodDecorator, secondClassDecorator } from "./decorators";

@firstClassDecorator("1")
@secondClassDecorator("2")
class ExampleClass {

  data: Array<string>

  constructor() {
    console.log("Constructor");
    this.data = ["a", "b"];
  }

  anotherMethod() {
    console.log("Another Method");
  }

  @firstMethodDecorator("3")
  getData() {
    return this.data;
  }
}

console.log(ExampleClass.prototype);
