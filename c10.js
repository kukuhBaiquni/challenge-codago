const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function gulaDarah(){

  rl.question('Tulis kalimatmu disini: ', (answer) => {

    function sentenceManipulation(sentence){
      let arraySentence = sentence.split(' ');
      let final = []
      for(let i = 0; i < arraySentence.length; i++){
        final.push(stringManipulation(arraySentence[i]))
      }
      console.log(`Hasil konversi> ${final.join(" ")}`)
    }
    sentenceManipulation(answer);

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

    gulaDarah()
  })
}
gulaDarah()
