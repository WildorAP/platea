import { useState } from "react";
import SectionHeader from "./SectionHeader.jsx";
import { EXCHANGE_RATES } from "../data/exchange-rates.js";
import "../styles/crypto-exchange.css";

const SECTION_META = {
    titulo: "Compra y venta de stablecoins",
    descripcion: "Cotización referencial al momento. USDT y USDC en Perú.",
};

/**
 * Sección "Cambio de USDT". Es la migración 1 a 1 de la calculadora que
 * antes vivía en script.v3.js, pero con el estado (monto, moneda, tipo
 * de operación) manejado por React en vez de leer/escribir el DOM a mano.
 */
export default function CryptoExchangeSection() {
    const [transactionType, setTransactionType] = useState("buy");
    const [amount, setAmount] = useState("");
    const [toCurrency, setToCurrency] = useState("USD");
    const [result, setResult] = useState(null);

    function handleConvert(evento) {
        evento.preventDefault();
        const monto = parseFloat(amount);
        if (Number.isNaN(monto) || monto <= 0) {
            alert("Por favor, ingresa una cantidad válida.");
            return;
        }
        const tasa = EXCHANGE_RATES[transactionType][toCurrency];
        setResult((monto * tasa).toFixed(2));
    }

    return (
        <section id="cambio-cripto" className="cx-section">
            <SectionHeader
                titulo={SECTION_META.titulo}
                descripcion={SECTION_META.descripcion}
            />
            <div className="cx-calculator">
                <p className="cx-rates">
                    PEN — Compra: {EXCHANGE_RATES.sell.PEN} · Venta: {EXCHANGE_RATES.buy.PEN}
                    <br />
                    USD — Compra: {EXCHANGE_RATES.sell.USD} · Venta: {EXCHANGE_RATES.buy.USD}
                </p>

                <form onSubmit={handleConvert}>
                    <div className="cx-form__options">
                        <label>
                            <input type="radio" name="transactionType" value="buy" checked={transactionType === "buy"} onChange={() => setTransactionType("buy")} /> Comprar
                        </label>
                        <label>
                            <input type="radio" name="transactionType" value="sell" checked={transactionType === "sell"} onChange={() => setTransactionType("sell")} /> Vender
                        </label>
                    </div>

                    <div className="cx-form__field">
                        <label htmlFor="amount">USDT:</label>
                        <input id="amount" type="number" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                    </div>

                    <div className="cx-form__field">
                        <label htmlFor="toCurrency">EN:</label>
                        <select id="toCurrency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                            <option value="USD">Dólar Estadounidense (USD)</option>
                            <option value="PEN">Nuevo Sol Peruano (PEN)</option>
                        </select>
                    </div>

                    <button type="submit" className="cx-submit">Convertir</button>
                </form>

                {result !== null && (
                    <div className="cx-result">
                        <h3>Total en {toCurrency}: {result}</h3>
                    </div>
                )}
            </div>
        </section>
    );
}