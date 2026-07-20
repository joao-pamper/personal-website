import WaveCanvas from "@/components/WaveCanvas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <WaveCanvas />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
