import "../styles/hero.css";

/**
 * Portada del sitio. Es la primera sección bajo el header — presenta
 * ambos pilares del negocio (cambio de cripto + recarga gaming) y da
 * acceso directo a cada uno con un CTA, más una franja de confianza
 * (registro SBS-UIF, partner Binance) que ya existía como dato en el
 * negocio pero no se mostraba en ningún lado del sitio.
 */
export default function Hero() {
    return (
        <section id="inicio" className="hero">
            <p className="hero__eyebrow">Cripto y gaming, en un solo lugar</p>
            <h1 className="hero__title">
                Cambia tus <span className="hero__title--accent">stablecoins</span> y recarga tu{" "}
                <span className="hero__title--accent-alt">mundo gamer</span>
            </h1>
            <p className="hero__subtitle">
                Compra y vende USDT/USDC al instante, o recarga saldo en Sandbox, MOBOX, Roblox y más — todo desde Platea Hub.
            </p>
            <div className="hero__actions">
                <a className="hero__cta hero__cta--primary" href="#cambio-cripto">Cambiar cripto</a>
                <a className="hero__cta hero__cta--secondary" href="#gaming">Recargar gaming</a>
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