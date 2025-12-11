const count = 9;
const symbol = "*";
const med = Math.ceil(count / 2); // 5

for (let row = 1; row <= count; row++) {
  let pattern = "";
  
  // LOGIC: If we are past the middle, subtract row from total count (+1 correction)
  // Row 1-5: use 'row'
  // Row 6: 9 - 6 + 1 = 4
  // Row 7: 9 - 7 + 1 = 3
  let totalCols = row <= med ? row : count - row + 1;

  for (let col = 1; col <= totalCols; col++) {
      pattern += symbol;
  }
  console.log(pattern);
}