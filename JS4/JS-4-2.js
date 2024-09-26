const myPizzas = ["peperoni", "Caprichosa", "Diablo", "4 cheeses"];
const competitorPizzas = ["peperoni"];
const result = [];

for (let a = 0; a < competitorPizzas.length; a++) {
  competitorPizzas[a] = competitorPizzas[a].toUpperCase();
}

for (let a = 0; a < myPizzas.length; a++) {
  myPizzas[a] = myPizzas[a].toUpperCase();
}

for (const pizza of myPizzas) {
  pizza.toUpperCase();
  if (!competitorPizzas.includes(pizza)) {
    result.push(pizza);
    all = false;
  }
}

if (result.length === 0) {
  console.log(null);
} else {
  console.log(result);
}
