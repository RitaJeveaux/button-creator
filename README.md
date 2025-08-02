# 🎨 Criador de Botões - Estudo de Formulários e `localStorage`

Este é um projeto simples criado para estudar a manipulação de formulários com JavaScript e a persistência de dados no navegador utilizando o `localStorage`. A aplicação permite que o usuário personalize o estilo de um botão em tempo real e veja o código CSS correspondente.

## ✨ Funcionalidades

-   **Customização em Tempo Real:** Altere propriedades como cor, tamanho, borda e fonte e veja o resultado instantaneamente.
-   **Geração de CSS:** O código CSS do botão estilizado é exibido na tela, pronto para ser copiado.
-   **Persistência de Dados:** Suas customizações são salvas! Ao fechar e reabrir a página, o botão manterá os últimos estilos aplicados.

---

## ⚙️ Como Funciona

A lógica da aplicação é construída em cima de três pilares principais:

1.  **Captura de Eventos:** Um único `event listener` é adicionado ao elemento `<form>`. Ele escuta o evento `change`, que é disparado sempre que o valor de um dos campos do formulário (`<input>`, `<select>`) é alterado.

2.  **Manipulação de Estilos:**
    -   Quando um evento é capturado, a função `handleChange` identifica qual controle foi alterado (pelo seu atributo `name`).
    -   Ela utiliza um objeto chamado `handleStyle` que funciona como um "mapa", associando o `name` de cada controle a uma função específica que sabe como aplicar aquele estilo ao botão.
    -   Por exemplo, ao alterar o controle com `name="color"`, a função `handleStyle.color(value)` é chamada, atualizando o `btn.style.color`.

3.  **Persistência com `localStorage`:**
    -   Após aplicar um estilo, a função `saveValues` é chamada.
    -   Em vez de salvar cada propriedade individualmente, a aplicação armazena **um único objeto JSON** no `localStorage` sob a chave `buttonStyles`.
    -   Esse objeto contém todos os pares de chave/valor dos estilos (ex: `{"color": "#ff0000", "width": "250"}`).
    -   Ao carregar a página, a função `setValues` lê esse objeto do `localStorage`, reconstrói os estilos do botão e preenche os controles do formulário com os valores salvos.

---

## 🛠️ Tecnologias Utilizadas

-   **HTML5:** Para a estrutura da página e dos controles do formulário.
-   **CSS3:** Para a estilização inicial dos elementos.
-   **JavaScript (ES6+):** Para toda a lógica de manipulação do DOM, gerenciamento de eventos e interação com o `localStorage`.

---

## 🚀 Como Executar

Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador web moderno.
