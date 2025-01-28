import About from "@/components/About";
import Contact from "@/components/Contact";
import Face from "@/components/Face";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
      <div>
        <Header />
        <main>
          <Face />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  );
}

