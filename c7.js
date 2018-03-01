function weirdMultiply(sentence){
  let hasil = 1;
  let angka = sentence.toString().split('') ;
  if(angka.length===1){
    return sentence
  }
  for(let i=0;i<angka.length;i++){
    angka[i]= +angka[i];{
      hasil=hasil*angka[i];{
        if(i===angka.length-1){
          return weirdMultiply(hasil)
        }
      }
    }
  }
}
console.log(weirdMultiply(39));   //4
console.log(weirdMultiply(999));  //2
console.log(weirdMultiply(3));    //3
