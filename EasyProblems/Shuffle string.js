var restoreString = function(s, indices) {
    let newArray = new Array(s.length);
    for(let i=0; i<s.length; i++){
        newArray[indices[i]]=s[i];
    }
    console.log(newArray.join(''));
      
};
restoreString("codeleed",[4,5,6,7,0,1,2,3]);