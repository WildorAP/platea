/**
 * Configuración de contacto del sitio. Centralizado para no repetir el
 * número de WhatsApp en varios componentes (Header, botón flotante,
 * CTAs por mundo gaming, etc.) — si cambia el número, se edita en un
 * solo lugar.
 */
const WHATSAPP_NUMBER = "51913545467";

/**
 * Arma un link de WhatsApp con un mensaje pre-armado y correctamente
 * codificado. Se usa tanto para el mensaje genérico (WHATSAPP_URL) como
 * para mensajes específicos por contexto (ej. "quiero recargar en
 * Roblox").
 */
export function buildWhatsappUrl(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

export const WHATSAPP_URL = buildWhatsappUrl("Hola, quiero más información");