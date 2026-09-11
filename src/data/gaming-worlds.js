/**
 * Fuente de datos de la sección "Gamer & Metaverso".
 *
 * Cada objeto representa un mundo/juego para el que Platea Hub ofrece
 * recarga de saldo. Para agregar uno nuevo en el futuro basta con sumar
 * un objeto a GAMING_WORLDS: no se toca ningún componente, se re-renderiza
 * solo.
 *
 * Campos:
 * - id:      identificador único, en minúsculas y sin espacios (kebab-case).
 * - nombre:  nombre visible del mundo o juego.
 * - tagline: descripción corta (1 línea) de qué puede hacer el usuario ahí.
 * - icono:   clave que GamingIcons.jsx resuelve contra su propio set de
 *            íconos (así el set visual se reemplaza sin tocar contenido).
 */

export const GAMING_WORLDS = [
    {
        id: "sandbox-decentraland",
        nombre: "Sandbox & Decentraland",
        tagline: "Juega, crea y monetiza en el metaverso.",
        icono: "voxel-world",
        destacado: true,
    },
    {
        id: "mobox",
        nombre: "MOBOX",
        tagline: "Participa en el ecosistema GameFi.",
        icono: "hex-grid",
    },
    {
        id: "roblox-y-mas",
        nombre: "Roblox & más",
        tagline: "Recarga y lleva tu juego al siguiente nivel.",
        icono: "arcade-block",
    },
];

export const GAMING_SECTION_META = {
    badge: "Entretenimiento digital",
    titulo: "Gamer & Metaverso",
    descripcion: "Recarga saldo en los principales mundos virtuales.",
};