let totalNum: number = 0;
let totalNumPositivos: number = 0;
let porcentajePositivos: number = 0;
let numero: number = Number(prompt("Poner numero(CERO para finalizar)"));
while (numero !== 0) {
  if (numero > 0) {
    totalNumPositivos++;
  }
  totalNum++;
  numero = Number(prompt("Poner numero"));
}
if (totalNum > 0) {
  porcentajePositivos = (totalNumPositivos / totalNum) * 100;
  console.log(
    "Numeros positivos:",
    totalNumPositivos,
    "es el",
    porcentajePositivos,
    "% total"
  );
}
