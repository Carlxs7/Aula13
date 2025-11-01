let altura = prompt("Digite sua altura (em metros):");
let peso = prompt("Digite seu peso (em kg):");

let imc = peso / (altura * altura);

console.log("Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Classificação: Abaixo do peso");
}
else if (imc < 24.9) {
  console.log("Classificação: Peso normal")
}
else if (imc < 29.9) {
  console.log("Classificação: Sobre peso")
}
else if (imc < 34.9) {
  console.log("Classificação: Obesidade grau 1")
}