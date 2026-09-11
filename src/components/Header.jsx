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

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header__logo">
                <img src="/images/logo.png" alt="Platea Hub" />
            </div>
            <nav className="site-nav">
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}