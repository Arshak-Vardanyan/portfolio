import About from "@/components/About";
import Face from "@/components/Face";
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
        </main>
      </div>
  );
}

