import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import Fiche from '../pages/Fiche-logement/FicheLogement';
import APropos from "../pages/A-propos/APropos";
import Erreur404 from "../pages/404/404";


function RoutesPath() {
    return(
        <Routes>
        <Route element={<Navigate replace to="/accueil" />} path="/" />
        <Route path="/accueil" element={<Accueil />}/>
        <Route path="/logement/:id" element={<Fiche />}/>
        <Route path="/a-propos" element={<APropos />}/>
        <Route path="*" element={<Erreur404 />}/>
      </Routes>
    );
}

export default RoutesPath;