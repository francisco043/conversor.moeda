# conversor moeda

## 🚀 Começando

>![](https://img.shields.io/badge/license-%20Escola%20Marista%20Ir.%20Ac%C3%A1cio-black) ![](https://img.shields.io/badge/version-0.3-white)
 
 O projeto se enquadra em conversao de Moedas sobre um valor.
 
>* ``valor``
 
>* ``moeda de origem``
 
>* ``Moeda de destino``
 
>* ``selecionar moeda``
 
>* ``converter``
 
>* ``resultado``
  
## 📋 Requisitos
 
 requisitos sao colocar os valores e a moeda que deseja ser convertida.
 
## 📋 Informações
 
caso falte alguma informação, ou conste algo de errado, sera notificado.
 
## 📋 Foto projeto
 
![](Captura%20de%20tela%202024-10-25%20085313.png)
 
 
## 📋 Auxilío
 
Com a inserção dos valores, escolha qual moeda você deseja, em seguida, aperte em converter e logo a baixo o resultado sera apresentado.
 
## Funcionalidades do Java-Script 🔧
 
 
* 1- Recuperação de valores de entrada: Recupera os valores inseridos pelo usuário nos campos do formulário
 
* 2- Definição de taxas de câmbio: Define um objeto de taxas de câmbio fixas exchangeRates que contém as taxas de conversão entre diferentes moedas (USD, BRL e EUR).
 
* 3- Conversão de moeda: converte a moeda, deMoeda, paraMoeda.
 
* 4- Exibição do resultado:  Atualiza o conteúdo de texto do elemento com o id "result" para exibir o valor convertido, arredondado para duas casas decimais usando toFixed(2), juntamente com o símbolo da moeda convertida. 
 
# Partes📋
 
* 1 - Verifica se as informações sao validas
 
* 2 -  Faz as conversões
 
* 3 -  Validar os valores: Faz a validacao e apresenta o resultado apos a conversão
 
# 🖇️ Partes do Código
 
~~~ JavaScript
 
  document.getElementById ('currency-converter').addEventListener('submit', function(event){
    event.preventDefault();
 
    // Obter valores de entrada informados pelo usuário
    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;
 
    // Definir taxas de câmbio fixas
    const exchangeRates = {
        USD: { BRL: 5.70, EUR: 0.93 },
        BRL: { USD: 0.18, EUR: 0.16 },
        EUR: { USD: 1.08, EUR: 6.16 },
        EUR: { USD: 1.08, EUR: 6.16 }
    };
 
    // Conversão simples de moeda
    let valorConvertido;
    if(daMoeda === paraMoeda){
        valorConvertido = valor;
    }else{
        valorConvertido = valor * exchangeRates[daMoeda][paraMoeda];
    }
 
    const conversao = document.getElementById('result')
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${paraMoeda}` ;
});
 
~~~
 
## 📌 Explicação do Código
 
📌 ``Este código é um trechinho simples de JavaScript que realiza a conversão de moedas com base em taxas predefinidas e exibe o resultado na tela``

* Listener de Evento:

📌 ``O código começa com a adição de um listener para o evento 'submit' em um formulário HTML identificado por 'currency-converter'. O evento é prevenido de sua ação padrão (que é enviar os dados do formulário e recarregar a página) usando event.preventDefault().``

* Obtenção dos Valores de Entrada:

📌 ``É capturado o valor a converter de um campo de entrada com o ID 'amount' são também obtidos os tipos de moedas de origem ('daMoeda') e destino ('paraMoeda').``

* Taxas de Câmbio:

📌 ``Uma constante exchangeRates armazena taxas de câmbio fixas, organizadas em um objeto onde cada moeda de origem tem uma listagem de valores de conversão para as moedas de destino.``

* Conversão:

📌 ``Se a moeda de origem e destino são as mesmas, o valor convertido é igual ao valor original.Caso contrário, o valor a converter é multiplicado pela taxa de câmbio correspondente à conversão desejada.``

* Exibição do Resultado:

📌  ``Finalmente, o resultado da conversão (valorConvertido) é exibido em um elemento da página com o ID 'result'. O valor é formatado com duas casas decimais.``

* O código tem uma pequena duplicidade na definição de 'EUR', mas a lógica em si trata de uma conversão direta baseada em valores fixos e pressupõe que o usuário irá fornecer entradas válidas.


##  Metodos e linguagens utilizados 📋
 

✔️ Const
 
✔️ Document.getElementById
 
✔️ Tofixed
 
✔️ java-script
 
✔️ CSS3
 
✔️ HTML
 
# Explicação 📋
 
📌 Const
 
* 🖇️ cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

📌 Document.getElementById
 
* 🖇️ Um método do objeto document que busca e retorna um elemento HTML pelo seu atributo id. É usado para acessar elementos do DOM (Document Object Model) para manipulação.

 
📌 Tofixed
 
* 🖇️ ToFixed arredonda o número para cima, se temos, por exemplo 11.123 o valor fica 11.12.

 
📌 java-script
 
* 🖇️ Uma linguagem de programação que permite adicionar interatividade às páginas web. É executada no navegador do cliente e pode manipular o DOM, fazer requisições assíncronas (como com fetch), e muito mais.

📌 CSS3
 
* 🖇️ O CSS3 é utilizado em praticamente todos os aspetos do design web moderno. Alguns exemplos incluem: Layouts Flexíveis e Responsivos: Utilizando flexbox e media queries do CSS3, os desenvolvedores podem criar layouts que se adaptam dinamicamente ao tamanho do ecrã do dispositivo.

📌 Html
 
* 🖇️ A linguagem de marcação padrão usada para criar e estruturar páginas web. HTML define a estrutura do conteúdo através de elementoS.
 

# ⚙️ Executando os códigos
 
Entre na tela de formulario, digite o campo de valor e selecione as moedas a serem convertidas e aperte em converter
 
## 📌 Foto da interface:
 
 ![](Captura%20de%20tela%202024-10-25%20085313.png)
  
## 🔩 Quais motivos do cadastro?
 
Encontrar o valor, ter uma agilidade maior para a conversao de moeda e facilitar a vida do usuario.
 
# 🛠️ Conclusão
 
>* `` Esta função de conversao de moeda é simples porem cumpre com oque promete.
 
 >* ``Ele utiliza HTML e Bootstrap para proporcionar uma interface amigável e eficaz.
 
 >* ``Ele permite que os usuários coloque os valores, as moedas e proporciona o resultado.
 
 
#  📦 Tecnologias
 
## Tecnlogias utilizadas 🔧
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=black)
 
tem menu de contexto
 
## Fontes
 
- IA generativa
- GLOGLE

# Autor
 
- [Fransisco Maimone](https://github.com/francisco043)
 
 