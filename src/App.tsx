import Header from "./components/header/Header";
import Hero from "./components/body/hero/Hero";
import Quote from "./components/body/quote/Quote";
import Books from "./components/body/books/Books";

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
          <section id="about">About slider</section>
          <section id="contact">Contact</section>
        </main>
      </div>
      <footer>Footer</footer>
    </>
  );
}
