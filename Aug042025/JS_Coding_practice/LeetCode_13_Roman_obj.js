/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

const obj = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}

function Roman_obj(str){
    let sum = 0;
    for(let i =0;i<str.length;i++){
       let curr = obj[str[i]];
       let next = obj[str[i+1]];
     if(next > curr){
        sum = sum +(next-curr);
        i++
     }
     else{
        sum = sum+curr;
     }
    }
    return sum;
}

console.log(Roman_obj('IV'));