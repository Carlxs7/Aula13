<div align="center"> 
   
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

</div>

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

| IMC | Classificação |
|-----|---------------|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 - 24,9 | Peso normal |
| 25,0 - 29,9 | Sobrepeso |
| 29,0 - 34,9 | Obesidade grau 1 |

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
