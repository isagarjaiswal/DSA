const count = 5;
const symbol = "*";

for (let row = 1; row <= count; row++) {
  let pattern = "";
  for (let col = 1; col <= row; col++) {
   pattern += row;
  }
  console.log(pattern);
}