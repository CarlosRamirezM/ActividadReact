import { useState } from "react";

function Obra(props) {

    const [ name ] = useState(props.obra.name);
    const [ year ] = useState(props.obra.year);
    const [ description ] = useState(props.obra.description);

    return (
        <>
            <div className="col-3"> 
            <div className="card obraCard">
                <img src="https://www.kindpng.com/picc/m/280-2800888_computer-icons-portrait-avatar-clip-art-portrait-icon.png" className="card-img-top obraImg" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title museumTitle">{name} ({year})</h5>                   
                </div>
            </div>
            </div>
            <div className="col-9">
            <div className="card obraCard">                
                <div className="card-body">
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text">{description}</p>                    
                </div>
            </div>
            </div>
        </>
    )
}

export default Obra;