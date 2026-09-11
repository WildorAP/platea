import { WHATSAPP_URL } from "../config/contact.js";
import "../styles/hero.css";

/**
 * Portada del sitio. El CTA único lleva directo a WhatsApp (no hace
 * scroll a una sección): el titular presenta el servicio de cripto
 * como mensaje principal, y "Cambiar" es la acción que arranca la
 * conversación real con el equipo.
 */
export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <h1 className="hero__title">
                Servicio de tecnología para <span className="hero__title--accent">stablecoins</span>
            </h1>
            <p className="hero__subtitle">
                Compra y vende USDT/USDC al instante, todo desde Platea Hub.
            </p>
            <div className="hero__actions">
                <a className="hero__cta hero__cta--primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Cambiar</a>
            </div>
            <div className="hero__trust">
                <span className="hero__trust-item">
                    <img src="/images/verificado.png" alt="" />
                    Registrados ante la SBS-UIF como PSAV
                </span>
                <span className="hero__trust-item">
                    <img src="/images/binance.png" alt="" />
                    Partner oficial de Binance
                </span>
            </div>
        </section>
    );
}