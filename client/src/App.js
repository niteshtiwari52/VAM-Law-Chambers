import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.Page.js";
import ErrorPage from "./components/ErrorComponent/ErrorPage.jsx";
import AboutUs from "./components/AboutComponent/AboutUs.jsx";
import Services from "./components/ServicesComponent/Services.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
