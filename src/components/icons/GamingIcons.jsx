/**
 * Set de íconos de línea usados por la sección gaming. Cada uno es un
 * componente React normal (recibe las mismas props que un <svg>, así se
 * puede ajustar tamaño/color desde donde se use vía CSS `currentColor`).
 *
 * GAMING_ICONS mapea la clave `icono` de gaming-worlds.js al componente
 * correspondiente, para que WorldItem no tenga que hacer un switch/if.
 */

export function VoxelWorldIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z" strokeLinejoin="round" />
            <path d="M12 3v9M12 12 4 7.5M12 12l8-4.5M12 12v9" strokeLinejoin="round" />
        </svg>
    );
}

export function HexGridIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <path d="M9 3 4 6v6l5 3 5-3V6L9 3Z" strokeLinejoin="round" />
            <path d="M14 12 19 9l0 6-5 3-5-3" strokeLinejoin="round" />
        </svg>
    );
}

export function ArcadeBlockIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <rect x="4" y="9" width="16" height="9" rx="2" />
            <path d="M9 13h2M12 12v2" strokeLinecap="round" />
            <circle cx="16" cy="13" r="0.8" fill="currentColor" stroke="none" />
            <circle cx="18" cy="15" r="0.8" fill="currentColor" stroke="none" />
        </svg>
    );
}

export const GAMING_ICONS = {
    "voxel-world": VoxelWorldIcon,
    "hex-grid": HexGridIcon,
    "arcade-block": ArcadeBlockIcon,
};