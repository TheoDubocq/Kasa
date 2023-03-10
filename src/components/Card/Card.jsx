import "./Card.css";

function Card({id, image, titre}) {
    return(
        <div className="card" id={id}>
            <img className="card_image" src={image} alt="card"/>
            <div className="card_sombre"></div>
            <span className="card_titre">{titre}</span>
        </div>
    );
}

export default Card;