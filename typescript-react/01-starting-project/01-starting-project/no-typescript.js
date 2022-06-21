function add(a, b) {
  return a + b;
}

const result = add(() => 1, 5);

console.log(result);