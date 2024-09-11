import ButtonsLinks from "./components/ButtonsLinks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <div className="bg-[#F8FBFF] min-h-screen">
        <Header />
        <ButtonsLinks/>
        <SocialLinks/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
