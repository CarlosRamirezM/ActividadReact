import { useState } from "react";
import Obra from "./obra";

function MuseumDetail(props) {

    const [selectedMuseum] = useState(props.selectedMuseum);
    const [ museums ] = useState(props.museums);

    const museum = museums.filter(m => m.name === selectedMuseum);

    return (
        <div className="row">
          {museum[0].artworks.map((obra) => <Obra key={obra.id} obra={obra}/>)}          
        </div>
    );
    
}

export default MuseumDetail;