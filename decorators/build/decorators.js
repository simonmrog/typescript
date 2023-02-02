"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstMethodDecorator = exports.secondClassDecorator = exports.firstClassDecorator = void 0;
function firstClassDecorator(value) {
    console.log("First decorator factory:", value);
    return function (target) {
        console.log("First decorator:", target);
    };
}
exports.firstClassDecorator = firstClassDecorator;
function secondClassDecorator(value) {
    console.log("Second decorator factory:", value);
    return function (target) {
        console.log("Second decorator:", target);
    };
}
exports.secondClassDecorator = secondClassDecorator;
function firstMethodDecorator(value) {
    console.log("First method decorator factory:", value);
    return function (target, propertyKey, descriptor) {
        console.log("First method decorator:", target, propertyKey, descriptor);
    };
}
exports.firstMethodDecorator = firstMethodDecorator;
