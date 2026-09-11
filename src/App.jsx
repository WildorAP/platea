import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import WhatsappButton from "./components/WhatsappButton.jsx";
import GamingSection from "./components/GamingSection.jsx";
import CryptoExchangeSection from "./components/CryptoExchangeSection.jsx";
import "./styles/layout.css";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GamingSection />
        <CryptoExchangeSection />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}