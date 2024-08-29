 //Find Words Containing Character 
function findWordsContaining(words, x) {
    let output=[];
    for(let i=0; i<words.length; i++){
        if(words[i].includes(x)){
            output.push(i);
        }
    }
    return output;
}
findWordsContaining(["leet","code"],"e");
