const count = 9;
const symbol = "*";
const blank = " ";
const med = Math.ceil(count / 2);

for (let row = 1; row <= count; row += 2) {
  let pattern = "";
  for (let col = 1; col <= count; col++) {
    
    let offset = Math.floor((row - 1) / 2); // 0,1,2,3,4
    let startIndex = med - offset; // 5,4,3,2,1
    let endIndex = med + offset; // 5,6,7,8,9

    if (col >= startIndex && col <= endIndex){
      pattern += symbol;
    } else {
      pattern += blank;
    }
  }
  console.log(pattern);
}
