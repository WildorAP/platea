import { GAMING_ICONS } from "./icons/GamingIcons.jsx";
import { buildWhatsappUrl } from "../config/contact.js";

/**
 * Un ítem de la lista de mundos/juegos. Recibe un objeto `mundo` tal
 * como viene de data/gaming-worlds.js — no conoce nada del resto de la
 * sección, así que se puede reusar o testear de forma aislada.
 *
 * El CTA arma un mensaje de WhatsApp específico a este mundo, así el
 * clic ya llega como un lead calificado ("quiero recargar en Roblox")
 * en vez de un mensaje genérico.
 */
export default function WorldItem({ mundo }) {
    const Icono = GAMING_ICONS[mundo.icono];
    const whatsappHref = buildWhatsappUrl(`Hola, quiero recargar saldo en ${mundo.nombre}`);

    return (
        <li className={`gh-world${mundo.destacado ? " gh-world--destacado" : ""}`} data-world-id={mundo.id}>
            {mundo.destacado && <span className="gh-world__tag">Más pedido</span>}
            <span className="gh-world__icon">
                {Icono ? <Icono /> : null}
            </span>
            <div className="gh-world__copy">
                <h3 className="gh-world__name">{mundo.nombre}</h3>
                <p className="gh-world__tagline">{mundo.tagline}</p>
                <a className="gh-world__cta" href={whatsappHref} target="_blank" rel="noopener noreferrer">Recargar por WhatsApp →</a>
            </div>
        </li>
    );
}