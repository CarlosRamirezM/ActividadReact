import { useState } from "react";

function Museum(props) {
  const [name] = useState(props.museum.name);
  const [city] = useState(props.museum.city);
  const [image] = useState(props.museum.image);
  
  return (
    <div className="col-3">
      <div className="card museumCard" onClick={ () => props.action(name)}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title museumTitle">{name}</h5>
          <p className="card-text museumCity">
            {city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Museum;
