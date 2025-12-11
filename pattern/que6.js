const count = 5;
const symbol = "*";

for (let row = count; row >= 1; row--) {
  let pattern = "";
  for (let col = 1; col <= row; col++) {
    pattern += col;
  }
  console.log(pattern);
}