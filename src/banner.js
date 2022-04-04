import { useState } from "react";

function Banner() {

  const [selectedCat , changeSelectedCat] = useState("Museos");

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a id="brand" className="navbar-brand" href="#">
              Museos de arte moderno
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" href="/" onClick={() => changeSelectedCat("Museos")}>
                  Museos
                </a>
                <a className="nav-link" href="" onClick={() => changeSelectedCat("Artistas")}>
                  Artistas
                </a>
                <a className="nav-link" href="" onClick={() => changeSelectedCat("Movimientos")}>
                  Movimientos
                </a>
              </div>
            </div>
          </div>
        </nav>
        <p>Home - {selectedCat}</p>
    </div>
  );
}

export default Banner;