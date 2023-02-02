export function firstClassDecorator(value: string) {
  console.log("First decorator factory:", value);
  return function (target: Function) {
    console.log("First decorator:", target);
  };
}

export function secondClassDecorator(value: string) {
  console.log("Second decorator factory:", value);
  return function(target: Function) {
    console.log("Second decorator:", target);
  }
}

export function firstMethodDecorator(value: string) {
  console.log("First method decorator factory:", value);
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("First method decorator:", target, propertyKey, descriptor);
  };
}
