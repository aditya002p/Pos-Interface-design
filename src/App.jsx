import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import POS from "./pages/POS";
import Checkout from "./pages/Checkout";
import Analytics from "./pages/Analytics";
import { ServicesProvider } from "./contexts/ServicesContext";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <Router>
      <ServicesProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<POS />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ServicesProvider>
    </Router>
  );
};

export default App;
