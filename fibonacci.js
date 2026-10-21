const cantidad = 20;
let a = 0;
let b = 1;
const serie = [];

for (let i = 0; i < cantidad; i++) {
  serie.push(a);
  const siguiente = a + b;
  a = b;
  b = siguiente;
}

console.log(serie.join(", "));