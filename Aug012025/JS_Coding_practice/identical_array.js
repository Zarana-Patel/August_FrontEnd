function indenticalarray(arr1,arr2){
    if(arr1.length !== arr2.length) return false;
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] !== arr2[j]) return false;
        i++;
        j++;
    }
    return true;
}

console.log(indenticalarray([1,2,3],[1,2,3]));
console.log(indenticalarray([2,1,3],[1,2,3]));
//Time complexity - O(n)

/* If order doen't matter and duplicates doent matters */
function areSetsEqual(a,b){
    let setA = new Set(a);
    let setB = new Set(b);
    console.log(setA);
    console.log(setB);
    if(setA.size !== setB.size) return false;
    for(let value of setA){
        if(!setB.has(value)) return false;
    }
    return true;
}

console.log(areSetsEqual([2,1,3,3,2],[1,2,3]));

//Time complexity - O(n)