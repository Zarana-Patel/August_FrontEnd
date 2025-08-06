const jsonStr = '{"fruit":"apple","color":"red"}';

console.log(JSON.parse(jsonStr));

const user = { name: "Alice", age: 30 };

console.log(user.name);

const data = { a: 1, b: 2, c: 3 };

for(const[key,value] of Object.entries(data)){
    console.log(`${key}:${value}`);
}

//key exists
const car = { brand: "Toyota", year: 2020 };
 console.log('color' in car);


 const obj = { x: 10, y: 20, z: 30 };

 console.log(Object.keys(obj).length)

 const fruit = { apple: 10, banana: 5, mango: 7 };

 let swappedobj =  Object.fromEntries(Object.entries(obj).map(([key,value])=>[value,key]));

 console.log(swappedobj);


 const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

let merged = {...obj1,...obj2};

console.log(merged);