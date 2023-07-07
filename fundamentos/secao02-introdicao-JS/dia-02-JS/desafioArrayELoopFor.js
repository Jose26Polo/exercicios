const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma;
let maiorNumero = 0;
let numeracaoImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  console.log (numbers[index]);
  soma +=(numbers[index]);
  if (numbers[index] > maiorNumero) {
     maiorNumero = numbers[index]
  }
  if (numbers[index] % 2 === 1) {
     numeracaoImpar += 1
  }


};

console.log(soma);
let media = (soma/numbers.length);
console.log (`a media aritimetica é ${media}`);

if (media > 20) {
  console.log('O valor da média aritmética é maior que 20')
} else {
  console.log('O valor da média aritmética é menor que 20')
}

console.log(maiorNumero);

if (numeracaoImpar === 0) {
console.log ('Nenhum valor ímpar encontrado');
} else {
console.log (`existem ${numeracaoImpar} numeros impares!`);
}

