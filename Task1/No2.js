function finbonacciArray(n) {
  let fibonacci = [0, 1];

  while (fibonacci.length < n) {
    const num =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(num);
  }

  return fibonacci;
}

const result = finbonacciArray(10);
console.log(result);
