const arr= ['apple','banana','apple','orange','banana','apple'];


function freqMap(arr){
    let freqMap = {};
    for(const item of arr){
       if(freqMap[item]){
        freqMap[item]++;
       }
       else{
        freqMap[item] = 1;
       }
    }
    return freqMap;
}
console.log(freqMap(arr));

//Using Map

function freqMapUsingMap(arr){
    let freqMap = new Map();
    for(const item of arr){
        if(freqMap.has(item)){
            freqMap.set(item,freqMap.get(item)+1);
        }
        else{
           freqMap.set(item,1);
        }
    }
    return freqMap;
}
console.log(freqMapUsingMap(arr));