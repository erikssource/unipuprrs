
const createEnum = function(arr) {
  let obj = {};
  arr.forEach((item) => {
    Object.defineProperty(obj, item, {
      value: item,
      writable: false,
      enumerable: true,
      configurable: false
    });
  });
  return obj;
};

export default createEnum;