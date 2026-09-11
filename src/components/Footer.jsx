import "../styles/footer.css";

/**
 * Pie de página. Tres bloques (marca, navegación, contacto) más una
 * franja legal abajo — reemplaza el bloque de texto plano que quedó
 * del sitio original, que no compartía el lenguaje visual del resto
 * (header/hero/secciones) construido en este rediseño.
 */
export default function Footer() {
    const anioActual = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="site-footer__top">
                <div className="site-footer__brand">
                    <img src="/images/logo.png" alt="Platea Hub" />
                    <p>Tu plataforma de stablecoins y recarga gaming.</p>
                </div>

                <nav className="site-footer__links" aria-label="Enlaces del sitio">
                    <a href="#inicio">Inicio</a>
                    <a href="#gaming">Gaming</a>
                    <a href="#cambio-cripto">Cambio</a>
                </nav>

                <div className="site-footer__contact">
                    <a href="mailto:platehub@correo.com">platehub@correo.com</a>
                    <span>RUC: 20612682594</span>
                </div>
            </div>

            <div className="site-footer__bottom">
                <p>PLATEA HUB S.A.C · Registrados ante la SBS-UIF como PSAV</p>
                <p>Copyright © {anioActual} PlateaHub</p>
            </div>
        </footer>
    );
}