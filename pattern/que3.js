// 1
// 12
// 123
// 1234
// 12345

const count = 5;
const symbol = "*";

for (let row = 1; row <= count; row++) {
   let line = ""
   for (let col = 1; col <=row; col++) {
    line+=col
   }   
   console.log(line)
}