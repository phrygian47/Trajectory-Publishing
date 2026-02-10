import Header from "./components/header/Header";
import Hero from "./components/body/hero/hero";
import Quote from "./components/body/quote/Quote";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="hero">
          <Hero></Hero>
        </section>
        <section id="quote">
          <Quote></Quote>
        </section>
        <section id="about">About slider</section>
        <section id="books">Books</section>
        <section id="contact">Contact</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
