# Calculadora de IMC

Este projeto é uma simples calculadora de IMC (Índice de Massa Corporal) desenvolvida em JavaScript.

## Sobre

A aplicação solicita ao usuário sua altura (em metros) e peso (em quilogramas), calcula o IMC e exibe a classificação correspondente com base no resultado.

## Como funciona

1. O usuário informa sua altura e peso através de prompts.
2. O IMC é calculado pela fórmula:  
   ```
   IMC = peso / (altura * altura)
   ```
3. O resultado é exibido no console, junto com a classificação de acordo com o valor do IMC.

## Classificações

- **Abaixo do peso:** IMC < 18.5  
- **Peso normal:** 18.5 ≤ IMC < 24.9  
- **Sobrepeso:** 24.9 ≤ IMC < 29.9  
- **Obesidade grau 1:** 29.9 ≤ IMC < 34.9  

## Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Salve o código JavaScript em um arquivo, por exemplo, `imc.js`.
3. No terminal, execute:
   ```
   node imc.js
   ```
4. Insira os valores solicitados e veja o resultado no console.

## Exemplo de uso

```
Digite sua altura (em metros): 1.75
Digite seu peso (em kg): 70
Seu IMC é: 22.86
Classificação: Peso normal
```

## Licença

Este projeto está sob a licença MIT.
