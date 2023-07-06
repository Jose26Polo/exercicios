let num1 = 499;
let num2 = 224;
let num3 = 187;
let num4 = num1;

if (num2 > num4 && num2 > num3) {
num4 = num2 ;
} else if (num3 > num4) {
num4 = num3;
}

console.log('o maior numero entre os tres é: ' + num4);