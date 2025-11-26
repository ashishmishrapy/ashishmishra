import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
