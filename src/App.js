import { Routes, Route,BrowserRouter,Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.css';
import Accueil from "./pages/Accueil/Accueil";
import Fiche from "./pages/Fiche-logement/FicheLogement";
import APropos from "./pages/A-propos/APropos";
import Erreur404 from "./pages/404/404";

function App() {
    return (
      
      <BrowserRouter>
        <Header />
			    <main>
            <Routes>
              <Route element={<Navigate replace to="/accueil" />} path="/" />
              <Route path="/accueil" element={<Accueil />}/>
              <Route path="/logement/:id" element={<Fiche />}/>
              <Route path="/a-propos" element={<APropos />}/>
              <Route path="*" element={<Erreur404 />}/>
            </Routes>
         </main>
        <Footer />
      </BrowserRouter>
    );
}

export default App;