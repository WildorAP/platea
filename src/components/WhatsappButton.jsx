import { WHATSAPP_URL } from "../config/contact.js";

export default function WhatsappButton() {
    return (
        <a className="whatsapp-fab" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <img src="/images/whatsapp-icon.png" alt="Escríbenos por WhatsApp" />
        </a>
    );
}