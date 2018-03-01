//Challenge #1
function sum(){
  let hasil = 0
  for (let i=0; i<arguments.length; i++){
    hasil+=arguments[i]
  }return hasil
}
console.log(sum(1,2,7));
console.log(sum(1,4));
console.log(sum(11));
console.log(sum(10,3,6,7,9));

//Challenge #2
function deretKaskus(n){
  let hasil=[]
  for (let i=3; i<=n*3; i+=3){
    if (i%5===0 && i%6===0){
      hasil.push('KASKUS')
    }else if (
      i%5===0){
        hasil.push('KAS')
      }else if (
        i%6===0){
          hasil.push('KUS')
        }else{
          hasil.push(i)
        }
  }return hasil
}
console.log(deretKaskus(10));

//Challenge #3
function romawi(n){
  let rm = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let nn = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let hasil='';

  for(let i=0; i<rm.length; i++){
    while (n%nn[i]<n){
      hasil=hasil+rm[i];
      n=n-nn[i];
    }
  }return hasil
}
console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));

//Challenge #4
function 
