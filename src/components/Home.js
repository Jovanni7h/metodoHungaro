import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

export default function Home() {
  return (
    <div className="contenedor">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col text-center">
            <h1>Metodo Hungaro</h1>
            <Link to="/hungaro" className="btn btn-outline-light">
              Comenzar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
