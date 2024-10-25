document.getElementById('currency-form').
addEventListener('submit', function(event){
    event.preventDefault();
    
    // obter valores de entrada informados pelo usuario

    const valor = parseFloat(document.getElementById('amount').value);
    const daMoeda = document.getElementById('from-currency').value;
    const paraMoeda = document.getElementById ('from-currency').value;

    // Definir taxas de cambio fixas
    const exchangeRates = {
        
        USD:{BRL: 5.70, EUR: 0.93, },    
        USD:{BRL: 0.18, EUR: 0.16, },    
        USD:{BRL: 1.08, EUR: 6.16 },    

        

    };
// conversao simples  de moeda

let valorConvertido; 
if (daMoeda === paraMoeda){
    valorConvertido = valor;

}else{
    valorConvertido = valor * exchangeRates [daMoeda][paraMoeda];

}

 const conversao = document.getElementById('conversao');
});