let str="masai";
let bag="";
for(let x=str.length-1;x>=0;x--){
  bag+=bag+str[x]
}
if(bag==str){
  console.log("true")
}
else{
  console.log("false")
}