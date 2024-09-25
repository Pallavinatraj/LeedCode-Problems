var lengthOfLastWord = function(s) {
    let lastWord ='';
    let foundLastWord =false;
    for(let i=s.length-1; i>=0;i--){
        if(s[i]!==' '){
           lastWord +=s[i];
           foundLastWord = true;
        }
        else if(foundLastWord){
            break;
        }
    }
    console.log(lastWord.length);
};
lengthOfLastWord("My name is Pallavi ");
