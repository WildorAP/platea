/**
 * Encabezado compartido de una sección-pilar (badge + título + descripción).
 * Lo usa GamingSection y CryptoExchangeSection.
 *
 * `badge` es opcional: si la sección no necesita etiqueta (ej. cambio
 * de cripto, que ya no la lleva), no se renderiza nada en su lugar en
 * vez de mostrar una pastilla vacía.
 */
export default function SectionHeader({ badge, titulo, descripcion }) {
    return (
        <div className="svc-header">
            {badge && <span className="svc-badge">{badge}</span>}
            <h2 className="svc-title">{titulo}</h2>
            <p className="svc-description">{descripcion}</p>
        </div>
    );
}