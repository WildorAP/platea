import SectionHeader from "./SectionHeader.jsx";
import WorldItem from "./WorldItem.jsx";
import { GAMING_WORLDS, GAMING_SECTION_META } from "../data/gaming-worlds.js";
import "../styles/gaming-landing.css";

const LIVE_STATS = [
    "Activación en minutos",
    `+${GAMING_WORLDS.length} mundos disponibles`,
];

/**
 * Sección "Gamer & Metaverso". Compone el encabezado compartido con la
 * franja de estado en vivo y la lista de mundos. Agregar un mundo nuevo
 * = agregar un objeto en data/gaming-worlds.js; este componente no
 * cambia (LIVE_STATS incluso recalcula el conteo solo).
 */
export default function GamingSection() {
    return (
        <section id="gaming" className="gh-section">
            <div className="gh-intro">
                <SectionHeader
                    badge={GAMING_SECTION_META.badge}
                    titulo={GAMING_SECTION_META.titulo}
                    descripcion={GAMING_SECTION_META.descripcion}
                />
                <ul className="gh-stats">
                    {LIVE_STATS.map((stat) => (
                        <li key={stat} className="gh-stats__item">
                            <span className="gh-stats__dot" aria-hidden="true" />
                            {stat}
                        </li>
                    ))}
                </ul>
            </div>
            <ul className="gh-worlds">
                {GAMING_WORLDS.map((mundo) => (
                    <WorldItem key={mundo.id} mundo={mundo} />
                ))}
            </ul>
        </section>
    );
}