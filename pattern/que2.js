const count = 5;
const symbol = "*";

for(let row=0; row<count; row++){
    let line = ""
    for(let col=0; col<=row; col++){
        line += symbol
    }   
 
    console.log(line)
}