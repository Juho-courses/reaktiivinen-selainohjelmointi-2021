function print1() {
  console.log("moro");
}

print1();

function print2(asia) {
  console.log(asia);
}

print2("HEI NY");

const print3 = () => {
  console.log("print3");
};

print3();

const print4 = (asia) => {
  return asia;
};

console.log(print4(123));

const print5 = (asia) => asia;

console.log(print5(321));
