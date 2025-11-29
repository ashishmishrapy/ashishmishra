import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import UnderConstruction from "./pages/UnderConstruction";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="construction" element={<UnderConstruction />} />
      </Routes>
    </>
  );
};

export default App;
