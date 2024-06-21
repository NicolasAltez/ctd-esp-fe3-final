
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import DentistDetail from "./Routes/Detail";
import { ContextGlobal } from "./Components/utils/global.context";
import './Components/utils/routes'
import { routes } from "./Components/utils/routes";



function App() {
  const {state} = useContext(ContextGlobal);
  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.dentistDetail} element={<DentistDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
