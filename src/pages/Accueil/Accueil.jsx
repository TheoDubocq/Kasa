import "./Accueil.css";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import Logements from "../../datas/logements.json";
import Banner from "../../components/banner/banner";
import bannerAccueil from "../../assets/img/banner.png";


function Accueil() {
    return(
        <div className="Accueil">
            <Banner image={bannerAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="logements">
                {Logements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Card key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;