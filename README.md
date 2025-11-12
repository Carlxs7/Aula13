<div align="center"> 
   
<h1>🚀 Calculadora de IMC</h1>

<p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>
   
## 🌐 Demonstração

<img width="1146" height="574" alt="image" src="https://github.com/user-attachments/assets/d8c358ba-06f2-4d8c-ab0a-82b3a9694112" />

</div>

## ✨ Funcionalidades

-   **Cálculo Preciso do IMC**: Calcula o IMC com base na altura e peso fornecidos pelo usuário.
-   **Validação de Dados**: Verifica se os valores inseridos são números válidos e positivos, exibindo uma mensagem de erro amigável caso contrário.
-   **Classificação Visual**: Apresenta o resultado com uma classificação clara ("Abaixo do peso", "Peso normal", etc.) e cores diferentes para facilitar a interpretação.
-   **Interface Intuitiva**: Design limpo e focado na usabilidade, sem o uso de `alerts`.
-   **Responsividade**: A interface se adapta a diferentes tamanhos de tela, desde desktops até dispositivos móveis.
-   **Compatibilidade**: Aceita tanto ponto (`.`) quanto vírgula (`,`) como separador decimal, atendendo aos padrões brasileiros.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando apenas tecnologias web padrão, conhecidas como "Vanilla":

-   **HTML5**: Para a estruturação semântica do conteúdo.
-   **CSS3**: Para estilização, layout com Flexbox e animações sutis.
-   **JavaScript (ES6+)**: Para toda a lógica de interação, cálculo e manipulação do DOM.

## 📁 Estrutura do Projeto

O projeto é organizado de forma clara e simples, com cada arquivo tendo uma responsabilidade específica.

```
Aula13/
├── index.html          # Estrutura principal da aplicação.
├── style.css           # Arquivo de estilos responsável pela aparência visual.
└── imc.js              # Lógica JavaScript para cálculo e interação.
```

### Descrição dos Arquivos

-   **`index.html`**: Contém a estrutura da página, incluindo o formulário de entrada de dados e a seção de resultados.
-   **`style.css`**: Define todos os estilos visuais, como cores, fontes, espaçamentos e a responsividade da aplicação. As classes de cor (`.abaixo-peso`, `.normal`, etc.) são usadas para dar feedback visual ao usuário.
-   **`imc.js`**: Contém toda a lógica do programa. Ele escuta o evento de envio do formulário, valida os dados, calcula o IMC, determina a classificação e atualiza a interface com o resultado.

## 🚀 Como Executar o Projeto

Como este é um projeto de front-end puro, não é necessário um servidor complexo ou instalação de dependências. Siga os passos abaixo:

1.  **Clone o repositório** (ou faça o download dos arquivos):
    ```bash
    git clone https://github.com/seu-usuario/Aula13.git
    ```
2.  **Navegue até o diretório do projeto**:
    ```bash
    cd Aula13
    ```
3.  **Abra o arquivo `index.html` no seu navegador de preferência**:
    -   Você pode simplesmente dar um duplo clique no arquivo.
    -   Ou, para uma experiência de desenvolvimento melhor, use uma extensão como "Live Server" no VS Code.

## 📖 Como Usar

1.  Abra a aplicação no seu navegador.
2.  No campo **"Altura (em metros)"**, digite sua altura. Ex: `1.75`.
3.  No campo **"Peso (em kg)"**, digite seu peso. Ex: `70.5`.
4.  Clique no botão **"Calcular"**.
5.  O seu IMC e a classificação correspondente aparecerão na caixa de resultado abaixo do botão, com uma cor de fundo que indica a faixa de risco.

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem uma sugestão para melhorar o projeto, por favor:

1.  Faça um `fork` do projeto.
2.  Crie uma nova branch com a sua feature (`git checkout -b feature/nova-funcionalidade`).
3.  Commit as suas mudanças (`git commit -m 'Adicionando nova funcionalidade'`).
4.  Push para a branch (`git push origin feature/nova-funcionalidade`).
5.  Abra um `Pull Request`.

---

**Desenvolvido com ❤️ por DevCarlxs**
**Licença: [MIT](https://choosealicense.com/licenses/mit/)**
