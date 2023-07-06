let salary = 3500.00;
let descontoInss;
let descontoIr = 0;
let salaryLiquid;

if (salary <= 1556.94) {
descontoInss = (salary * 0.08);
} else if (salary >= 1556.95 && salary <=2594.92) {
descontoInss = (salary * 0.09);
} else if (salary >= 2594.93 && salary <=5189.82) {
descontoInss = (salary * 0.11);
} else if (salary > 5189.82) { 
descontoInss = 570.88 ;
} 

let salaryDeduzid = salary - descontoInss;

if (salaryDeduzid >= 1903.99 && salaryDeduzid <= 2826.65) {
descontoIr = (salaryDeduzid * 0.075 -142.80);
} else if (salaryDeduzid >= 2826.66 && salaryDeduzid <= 3751.05) {
descontoIr = (salaryDeduzid * 0.15 -354.80);
} else if (salaryDeduzid >= 3751.06 && salaryDeduzid <= 4664.68) {
descontoIr = (salaryDeduzid * 0.225 -636.13);
} else if (salaryDeduzid > 4664.68) {
descontoIr = (salaryDeduzid * 0.275 -869.36);
} 

console.log(descontoInss);
console.log(descontoIr);
salaryLiquid = salary - descontoInss - descontoIr;
console.log('salario liquido é de R$: ' + salaryLiquid);

