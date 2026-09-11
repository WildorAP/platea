import { useState } from "react";
import { WHATSAPP_URL } from "../config/contact.js";

/**
 * Enlaces de navegación. "Contacto" apunta directo a WhatsApp en vez de
 * a un ancla interna: en el sitio original ese link apuntaba a una
 * sección que en realidad mostraba un widget de precios de mercado,
 * no un medio de contacto real — lo corregimos aquí.
 */
const NAV_LINKS = [
    { href: "#inicio", label: "Inicio" },
    { href: "#gaming", label: "Gaming" },
    { href: "#cambio-cripto", label: "Cambio cripto" },
    { href: WHATSAPP_URL, label: "Contacto", external: true },
];

/**
 * En mobile el nav colapsa a un menú hamburguesa (el estado `menuOpen`
 * controla la clase site-nav--open). Sin esto, 4 links no caben en una
 * sola línea y se parten a la mitad de una palabra — se vio en la
 * revisión de responsive.
 */
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="site-header__logo">
                <img src="/images/logo.png" alt="Platea Hub" />
            </div>

            <button type="button" className="site-header__toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                <span className="site-header__toggle-bar" />
                <span className="site-header__toggle-bar" />
                <span className="site-header__toggle-bar" />
            </button>

            <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`}>
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} onClick={() => setMenuOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}