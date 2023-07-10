const number = 5;
let array =[];

for (let index = 0; index < number; index += 1) {
  array.push("*");
}

for (let indexImpress = 0; indexImpress < number; indexImpress += 1) {
  console.log(array.join(""));
};

