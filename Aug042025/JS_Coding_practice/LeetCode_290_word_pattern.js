function word_pattern(pattern,s){
    const arrayOfWords = s.split(' ').filter(word => word !== '');
    if (pattern.length !== arrayOfWords.length) return false;

    let mapPS = {};
    let mapSP = {};

    for(let i=0;i<pattern.length;i++){
       const charP = pattern[i];
       const charS = arrayOfWords[i];
        if(mapPS[charP] && mapPS[charP] !== charS) return false;
        if(mapSP[charS] && mapSP[charS] !== charP) return false;

        mapPS[charP] = charS;
        mapSP[charS] = charP;
    }
   return true;
};
console.log(word_pattern('abba','dog cat cat dog'));
console.log(word_pattern('abba', 'dog cat dog cat'));