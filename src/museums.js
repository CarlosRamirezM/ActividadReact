import { useEffect, useState } from "react";
import Museum from "./museum";
import MuseumDetail from "./museumDetail";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);
  const [view, setView] = useState("Museos");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        setMuseums(museums);
      });
  });

  return (
    <>
      <div className="row">
        {view === "Museos" ? <h1 className="titleSection" >Museos</h1> : <h1 className="titleSection">Museo {view}</h1>}
        {view === "Museos" ? (
          museums.map((museum) => (
            <Museum key={museum.id} museum={museum} action={setView}/>
          ))
        ) : (          
          <MuseumDetail selectedMuseum = {view} museums={museums}/>
        )}
      </div>
    </>
  );
}
export default Museums;
