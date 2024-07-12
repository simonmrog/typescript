export function setOnce(): Function {
  return function (target: any, key: string) {
    let value = target[key];
    let isSet = false;

    const getter = function () {
      console.log(`Getting the value for "${key}" property: ${value}`);
      return value;
    };

    const setter = function (this: any, val: unknown) {
      if (isSet) throw new Error(`Property ${key} can only be set once.`);
      value = val;
      isSet = true;
    };

    return {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    };
  };
}
