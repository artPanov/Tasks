let simpleNumber = 2;
const arrSimple = [simpleNumber];

function simple() {
  for (;;) {
    ++simpleNumber;
    if (arrSimple.some((item) => !(simpleNumber % item))) continue;
    arrSimple.push(simpleNumber);
    return simpleNumber;
  }
}

for (let i = 0; i < 10000; i += 1) simple();

console.log(`10001 simple number is ${arrSimple[arrSimple.length - 1]}`);