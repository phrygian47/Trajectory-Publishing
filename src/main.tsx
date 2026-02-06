import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// src/
// App.tsx
// main.tsx
// styles/
//   global.css
// components/
//   Header/
//     Header.tsx
//     Nav.tsx
//   sections/
//     HeroBanner.tsx
//     QuoteBanner.tsx
//     AboutSlider.tsx
//     BooksSection.tsx
//     ContactSection.tsx
//   Footer.tsx
