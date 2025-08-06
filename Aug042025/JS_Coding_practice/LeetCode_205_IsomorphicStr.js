function isomorphicStr(s,t){
    if(s.length !== t.length) return false;
    let mapST = {};
    let mapTS = {};

    for(let i=0;i<s.length;i++){
       const charS = s[i];
       const charT = t[i];
       if(mapST[charS] && mapST[charS]!== charT) return false;
       if(mapTS[charT] && mapTS[charT]!== charS) return false;

       mapST[charS] = charT;
       mapTS[charT] = charS;
    }
    return true;
};

console.log(isomorphicStr('egg','add'));