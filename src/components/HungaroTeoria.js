import React from "react";

export default function HungaroTeoria() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong className="text-info">¿Qué es el metodo hungaro?</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                El método húngaro es un algoritmo que se utiliza en problemas de
                asignación cuando se quiere minimizar el costo. Es decir, se usa
                para encontrar el costo mínimo al asignar varias personas a
                diversas actividades basadas en el menor costo. Se debe asignar
                cada actividad a una persona diferente.
              </p>
              <p>
                Un problema de asignación es un tipo especial de problema de
                programación lineal, donde el objetivo es minimizar el costo o
                el tiempo de completar una cantidad de trabajos por parte de
                varias personas.
              </p>
              Una de las características importantes del problema de asignación
              es que solo se asigna un trabajo (o trabajador) a una máquina (o
              proyecto).Este método fue desarrollado por el matemático húngaro
              D. Konig. Por esta razón, se le conoce como el método húngaro para
              problemas de asignación. También es conocido como algoritmo de
              asignación de Kuhn-Munkres.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong className="text-info">
                ¿En qué consiste el método húngaro?
              </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              El método húngaro consta de cuatro pasos:
              <p>
                Los primeros dos pasos se ejecutan una sola vez, mientras que
                los pasos 3 y 4 se repiten hasta encontrar una asignación
                óptima.
              </p>
              <p>
                Se considera como dato de entrada a una matriz cuadrada del
                orden n por n, la cual debe contener solamente elementos no
                negativos.
              </p>
              Para un problema dado, si el número de filas de la matriz no es
              igual al número de columnas se debe agregar una fila ficticia o
              una columna ficticia, dependiendo del caso. Los costos de
              asignación para esas celdas ficticias siempre se asignan como
              cero.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
