import styles from "./style.js";
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

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
          <NavBar />
          <Hero />
          {/* <Billing />
          <CardDeal />
          <Business />
          <Clients />
          <CTA />
          <Stats />
          <Testimonials />
          <Footer /> */}
        </div>
  );
}

export default App;
