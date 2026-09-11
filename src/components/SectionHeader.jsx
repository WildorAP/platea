/**
 * Encabezado compartido de una sección-pilar (badge + título + descripción).
 * Lo usa GamingSection hoy, y lo reusará la sección de cambio de cripto
 * más adelante — por eso vive suelto y no adentro de GamingSection.
 */
export default function SectionHeader({ badge, titulo, descripcion }) {
    return (
        <div className="svc-header">
            <span className="svc-badge">{badge}</span>
            <h2 className="svc-title">{titulo}</h2>
            <p className="svc-description">{descripcion}</p>
        </div>
    );
}