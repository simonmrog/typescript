"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
let ExampleClass = class ExampleClass {
    constructor() {
        console.log("Constructor");
        this.data = ["a", "b"];
    }
    anotherMethod() {
        console.log("Another Method");
    }
    getData() {
        return this.data;
    }
};
__decorate([
    (0, decorators_1.firstMethodDecorator)("3")
], ExampleClass.prototype, "getData", null);
ExampleClass = __decorate([
    (0, decorators_1.firstClassDecorator)("1"),
    (0, decorators_1.secondClassDecorator)("2")
], ExampleClass);
ExampleClass.prototype.oneMethod = function () {
    console.log("One Method");
};
console.log(ExampleClass.prototype);
