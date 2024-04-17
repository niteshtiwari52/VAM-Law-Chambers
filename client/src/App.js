import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.Page.js";
import ErrorPage from "./components/ErrorComponent/ErrorPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/demo" element={<Trail />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/:authType" element={<AuthPage />} /> */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
