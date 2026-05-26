import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Routes */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;