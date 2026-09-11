/**
 * Tasas de cambio de USDT. Hoy son valores fijos que hay que actualizar
 * a mano en este archivo cuando cambia el mercado — es exactamente el
 * problema que se diagnosticó al inicio del proyecto (precios
 * hardcodeados y expuestos en el bundle del cliente).
 *
 * Cuando se conecte una fuente de precios real (API propia o de un
 * exchange), este archivo es el único lugar que cambia: se reemplaza
 * por un fetch, y CryptoExchangeSection.jsx no se toca.
 */
export const EXCHANGE_RATES = {
    buy: {  // Comprar USDT con USD o PEN
        USD: 1.05,
        PEN: 3.82,
    },
    sell: { // Vender USDT por USD o PEN
        USD: 0.991,
        PEN: 3.78,
    },
};