const Card = ({ imgUrl = "", cardDescripcion = "Descripcion de card", cardtitulo = "Titulo de card", btn='Text' }) => {
    return (
        <div className="card" >
            <img src={imgUrl} className="card-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardtitulo}</h5>
                <p className="card-text">{cardDescripcion}</p>
                <a href="#" className="btn btn-primary">{btn}</a>
            </div>
        </div>
    );
};

export default Card;