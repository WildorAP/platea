/**
 * Pie de página con datos legales de la empresa. El año del copyright
 * se calcula solo (no queda hardcodeado y desactualizado cada enero).
 */
export default function Footer() {
    const anioActual = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <p>
                Puedes ponerte en contacto con nosotros en: <a href="mailto:platehub@correo.com">platehub@correo.com</a>
                <br />
                RAZÓN SOCIAL: PLATEA HUB S.A.C - RUC: 20612682594
                <br />
                Copyright © {anioActual} PlateaHub
            </p>
        </footer>
    );
}