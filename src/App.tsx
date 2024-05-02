import "./App.css";
import {
  NavBar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components/index.ts";
import React, { useRef } from 'react';

function App() {
  const businessRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="bg-gradient-to-br from-purple-900 to-purple-700 w-full overflow-hidden">
          <NavBar />
          <Hero />
          <Stats />
          <Business businessRef={businessRef} />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer businessRef={businessRef} />
        </div>
  );
}

export default App;
