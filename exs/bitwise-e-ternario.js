let n1 = 10 //00001010
let n2 = 11 //00001011
res = (n1 & n2 ? "Maior" : "Menor")
if((n1 & n2) >= n1 && (n1 & n2) <= n2){
    console.log(`Está entre ${n1} e ${n2}`)
}else{
    console.log(res)
}
console.log(n1 & n2)