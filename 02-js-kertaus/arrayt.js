let numerot = []; // Array();

console.log(numerot);

numerot.push(1);
numerot.push(2);
numerot.push(3);
numerot.push(4);

console.log(numerot);

let tuplatut_numerot = numerot.map(function (numero) {
  return numero * 2;
});

console.log({ numerot });
console.log({ tuplatut_numerot });

let parilliset_numerot = numerot.filter(function (numero) {
  return numero % 2 === 0;
});

console.log({ parilliset_numerot });
// console.log({ parilliset_numerot: parilliset_numerot });
