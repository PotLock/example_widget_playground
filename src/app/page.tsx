import Header from "./components/Header";
import Hero from "./components/Hero";
import KeySection from "./components/Keysection";
import KeySection2 from "./components/KeySection2";
import Perfect from "./components/Perfect";
import Start from "./components/Start";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <KeySection />
      <KeySection2 />
      <Perfect />
      <Start />
      <FAQs />
      <Footer />
    </div>
  );
}
