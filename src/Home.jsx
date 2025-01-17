import ButtonsLinks from "./components/ButtonsLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <>
      {/* Fondo que cubre toda la página */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      {/* Contenido de la página */}
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="flex-grow">
          <ButtonsLinks />
          <SocialLinks />
        </div>
        <Footer />
      </div>
    </>
  );
}
