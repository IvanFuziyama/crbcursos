const jogador1={nome:"Messi", energia: 100, vida:3, magia:100}
const jogador2={nome:"Cristiano", energia: 100, vida:5, velocidade: 90}
const jogador3={...jogador1,...jogador2}
console.log(jogador3)