let numerot = [1, 2, 3, 4];

// ...

let numerot2 = [...numerot, 6, 7, 8];
// console.log({ numerot2 });

let numerot3 = [...numerot, ...numerot2];
// console.log({ numerot3 });

const palauta_array = () => {
  return ["eka", "toka", "kolmas"];
};

// console.log(palauta_array());

let uusi_array = palauta_array();

// console.log(uusi_array[1]);

let [eka_arvo, ...muut] = palauta_array();

console.log({ eka_arvo });
console.log({ muut });

let henkilo = { nimi: "Juho", kaupunki: "Pori" };

const tallennaKantaan = (tyyppi) => {
  console.log(`${tyyppi.nimi} (${tyyppi.kaupunki}) tallennettu kantaan.`);
};

tallennaKantaan(henkilo);

const tallennaKantaan2 = ({ nimi, kaupunki }) => {
  console.log(`${nimi} (${kaupunki}) tallennettu kantaan.`);
};

tallennaKantaan2(henkilo);
