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
    <div className="bg-gradient-to-br from-purple-900 to-purple-700 w-full overflow-hidden">
          <NavBar />
          <Hero />
          <Stats />
          <Business />
          {/* <Billing />
          <CardDeal />
          <Clients />
          <CTA />
          <Testimonials />
          <Footer /> */}
        </div>
  );
}

export default App;
