
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import DentistDetail from "./Routes/Detail";
import { ContextGlobal } from "./Components/utils/global.context";



function App() {
  const {state} = useContext(ContextGlobal);
  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<DentistDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
