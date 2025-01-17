import HeaderLanding from "../components/landing/HeaderLanding";
import HeroLanding from "../components/landing/HeroLanding";
import Newletter from "../components/landing/Newletter";
import FooterLanding from "../components/landing/FooterLanding";

export default function Landing() {
  return (
    <div>
      <HeaderLanding />
      <HeroLanding />
      <Newletter />
      <FooterLanding />
    </div>
  );
}
