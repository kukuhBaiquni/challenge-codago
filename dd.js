function sentenceManipulation(sentence){
  let arraySentence = sentence.split(' ');
  let hasil = []
  for(let i = 0; i < arraySentence.length; i++){
    hasil.push(stringManipulation(arraySentence[i]))
  }
  return hasil.join(" ")
}

console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'));

function stringManipulation(word){
  let vokal = ['a','e','i','o','u'];
  let ident = 0;
  let text1 ='';
  let text2 ='';
  let hasil = '';
  for (let i=0; i<vokal.length;i++){
    if (word[0] === vokal[i]){
      return word
    } else {ident = word.length;
      text1 = word.slice(ident-(ident-1));
        text2 = word.slice(0,ident-(ident-1));
          hasil = `${text1}${text2}nyo`
      }
  }return hasil
}
