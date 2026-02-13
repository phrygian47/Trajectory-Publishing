import Header from "./components/header/Header";
import Hero from "./components/body/hero/Hero";
import Quote from "./components/body/quote/Quote";
import Books from "./components/body/books/Books";
import About from "./components/body/about/About";
import Contact from "./components/body/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header></Header>
      <div>
        <main>
          <section id="hero">
            <Hero></Hero>
          </section>
          <section id="quote">
            <Quote></Quote>
          </section>
          <section id="books">
            <Books></Books>
          </section>
          <section id="about">
            <About></About>
          </section>
          <section id="contact">
            <Contact></Contact>
          </section>
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
