// Definir las tasas de cambio para compra y venta
// Definir los precios de venta
const precios = {
    producto1: 0.995, //BUY USDT - USD
    producto2: 3.82,    //BUY USDT - PEN
    producto3: 0.985,    //SELL USDT - USD
    producto4: 3.78,     //SELL USDT - PEN
};


var precio_pen =`PEN Compra: <strong>${precios.producto4}</strong> Venta:   <strong>${precios.producto2}</strong>` ;
var precio_usd =`USD Compra: <strong>${precios.producto3}</strong> Venta: <strong>${precios.producto1}</strong>`;

// Función para actualizar el contenido del HTML con los precios

function actualizarInformacion() {
    // Obtener los elementos del DOM
    var precioPEN = document.getElementById("TC-PEN");
    var precioUSD = document.getElementById("TC-USD");

    // Actualizar el contenido de los elementos con las constantes
    precioPEN.innerHTML = precio_pen;
    precioUSD.innerHTML = precio_usd;
    
}

// Llamar a la función cuando la página cargue
window.onload = actualizarInformacion;


const exchangeRates = {
    buy: {  // Comprar Stablecoin con USD o PEN
        USD: precios.producto1, // Ejemplo: comprar USDT con USD (costo adicional)
        PEN: precios.producto2,  // Ejemplo: comprar USDT con PEN
    },
    sell: { // Vender Stablecoin por USD o PEN
        USD:precios.producto3, // Ejemplo: vender USDT por USD
        PEN:precios.producto4,  // Ejemplo: vender USDT por PEN
    }
};

function convertCurrency() {
    // Obtener los valores ingresados por el usuario
    var amount = parseFloat(document.getElementById("amount").value);
    var toCurrency = document.getElementById("toCurrency").value;
    var transactionType = document.querySelector('input[name="transactionType"]:checked').value;

    // Validar que la cantidad sea válida
    if (isNaN(amount) || amount <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    // Obtener la tasa de cambio para el tipo de transacción seleccionado (compra o venta)
    var exchangeRate = exchangeRates[transactionType][toCurrency];

    // Calcular el monto convertido
    var convertedAmount = amount * exchangeRate;

    // Mostrar el resultado en el campo de Total
    document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2);

    // Actualizar la etiqueta de la moneda en el resultado
    document.getElementById("currencyLabel").textContent = toCurrency;
}
