function anagramstr(s1,s2){
    if(s1.length !== s2.length)return false;
    let count = {};
    for(char of s1){
        if(count[char]){
            count[char]++;
        }
        else{
            count[char] =1;
        }
    }
    for(char of s2){
        if(!count[char]) return false;
        count[char]--;
    }
    return true;
    }

console.log(anagramstr('test','estt'));