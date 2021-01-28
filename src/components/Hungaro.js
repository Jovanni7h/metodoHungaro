import React from "react";
import HungaroTeoria from "./HungaroTeoria";

export default function Hungaro() {
  function MenorColumna1() {
    let lstNumero1 = document.getElementsByClassName("columna1"),
      arrayGuardar1 = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardar1[i] = lstNumero1[i].value;
      //  Busca el valor minimo del array
      const min = Math.min(...arrayGuardar1);
      //  Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementById("minimoCol1").value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestado1 = arrayGuardar1.map((v) => v - min);
    }
    //  Imprime el array
    console.log(arrayRestado1);

    // Llenar col1_f1
    let col1_f1 = arrayRestado1[0];
    document.getElementById("col1_f1").value = col1_f1;
    // Llenar col1_f2
    let col1_f2 = arrayRestado1[1];
    document.getElementById("col1_f2").value = col1_f2;
    // Llenar col1_f3
    let col1_f3 = arrayRestado1[2];
    document.getElementById("col1_f3").value = col1_f3;
    // Llenar col1_f4
    let col1_f4 = arrayRestado1[3];
    document.getElementById("col1_f4").value = col1_f4;
  }

  function MenorColumna2() {
    let lstNumero2 = document.getElementsByClassName("columna2"),
      arrayGuardar2 = [];
    for (var i = 0; i < lstNumero2.length; i++) {
      arrayGuardar2[i] = lstNumero2[i].value;
      // Busca el valor minimo del array
      const min = Math.min(...arrayGuardar2);
      // Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementById("minimoCol2").value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestado2 = arrayGuardar2.map((v) => v - min);
    }
    // Imprime el array
    console.log(arrayRestado2);
    // Llenar col2_f1
    let col2_f1 = arrayRestado2[0];
    document.getElementById("col2_f1").value = col2_f1;
    // Llenar col2_f2
    let col2_f2 = arrayRestado2[1];
    document.getElementById("col2_f2").value = col2_f2;
    // Llenar col2_f3
    let col2_f3 = arrayRestado2[2];
    document.getElementById("col2_f3").value = col2_f3;
    // Llenar col2_f4
    let col2_f4 = arrayRestado2[3];
    document.getElementById("col2_f4").value = col2_f4;
  }

  function MenorColumna3() {
    let lstNumero3 = document.getElementsByClassName("columna3"),
      arrayGuardar3 = [];
    for (var i = 0; i < lstNumero3.length; i++) {
      arrayGuardar3[i] = lstNumero3[i].value;
      //  Busca el valor minimo del array
      const min = Math.min(...arrayGuardar3);
      //  Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementById("minimoCol3").value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestado3 = arrayGuardar3.map((v) => v - min);
    }
    //  Imprime el array
    console.log(arrayRestado3);
    // Llenar col3_f1
    let col3_f1 = arrayRestado3[0];
    document.getElementById("col3_f1").value = col3_f1;
    // Llenar col3_f2
    let col3_f2 = arrayRestado3[1];
    document.getElementById("col3_f2").value = col3_f2;
    // Llenar col3_f3
    let col3_f3 = arrayRestado3[2];
    document.getElementById("col3_f3").value = col3_f3;
    // Llenar col3_f4
    let col3_f4 = arrayRestado3[3];
    document.getElementById("col3_f4").value = col3_f4;
  }

  function MenorColumna4() {
    let lstNumero4 = document.getElementsByClassName("columna4"),
      arrayGuardar4 = [];
    for (var i = 0; i < lstNumero4.length; i++) {
      arrayGuardar4[i] = lstNumero4[i].value;
      // Busca el valor minimo del array
      const min = Math.min(...arrayGuardar4);
      // Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementById("minimoCol4").value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestado4 = arrayGuardar4.map((v) => v - min);
    }
    // Imprime el array
    console.log(arrayRestado4);
    // Llenar col4_f1
    let col4_f1 = arrayRestado4[0];
    document.getElementById("col4_f1").value = col4_f1;
    // Llenar col4_f2
    let col4_f2 = arrayRestado4[1];
    document.getElementById("col4_f2").value = col4_f2;
    // Llenar col4_f3
    let col4_f3 = arrayRestado4[2];
    document.getElementById("col4_f3").value = col4_f3;
    // Llenar col4_f4
    let col4_f4 = arrayRestado4[3];
    document.getElementById("col4_f4").value = col4_f4;
  }

  const principal = () => {
    MenorColumna1();
    MenorColumna2();
    MenorColumna3();
    MenorColumna4();
  };

  return (
    <>
      <div className="container pt-4">
        <div className="row pb-4">
          <HungaroTeoria />
        </div>
        <div className="row">
          <div className="col-2">
            <h4 className="rounded-pill bg-light text-success text-center">
              Paso 1:
            </h4>
          </div>
          <p>
            Consiste en buscar el mínimo valor de cada columna y restarlo con
            los demás valores de la misma columna
          </p>

          {/* Form Inicial */}
          <form action="">
            {/* Fila 1 */}
            <div className="row">
              <div className="col-sm">
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Columna"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Columna"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Columna"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Columna"
                />
              </div>
            </div>
            {/* Fila 1 */}

            {/* Fila 2 */}
            <div className="row mt-2">
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fila"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna1"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna2"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna3"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna4"
                  placeholder=""
                />
              </div>
            </div>
            {/* Fila 2 */}

            {/* Fila 3 */}
            <div className="row mt-2">
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fila"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna1"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna2"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna3"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna4"
                  placeholder=""
                />
              </div>
            </div>
            {/* Fila 3 */}

            {/* Fila 4 */}
            <div className="row mt-2">
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fila"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna1"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna2"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna3"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna4"
                  placeholder=""
                />
              </div>
            </div>
            {/* Fila 4 */}

            {/* Fila 5 */}
            <div className="row mt-2">
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fila"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna1"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna2"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna3"
                  placeholder=""
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control columna4"
                  placeholder=""
                />
              </div>
            </div>
            {/* Fila 5 */}
          </form>
          {/* Form Inicial */}

          {/* Boton Calcular paso 1 */}
          <div className="row mt-2 text-center">
            <div className="col">
              <button
                className="acording btn btn-outline-success"
                onClick={principal}
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Calcular paso 1
              </button>
            </div>
          </div>
          {/* Boton Calcular paso 1 */}

          {/* Form Calculo Paso 1 */}
          <div className="row mt-2">
            <div className="col">
              <div className="collapse" id="collapseExample">
                {/* Form */}
                <form action="">
                  {/* Fila 1 */}
                  <div className="row">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                  </div>
                  {/* Fila 1 */}

                  {/* Fila 2 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f1"
                      />
                    </div>
                  </div>
                  {/* Fila 2 */}

                  {/* Fila 3 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f2"
                      />
                    </div>
                  </div>
                  {/* Fila 3 */}

                  {/* Fila 4 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f3"
                      />
                    </div>
                  </div>
                  {/* Fila 4 */}

                  {/* Fila 5 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f4"
                      />
                    </div>
                  </div>
                  {/* Fila 5 */}

                  {/* Fila 6 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        value="Minimo Columnas"
                        disabled
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        id="minimoCol1"
                        placeholder=""
                        disabled
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        id="minimoCol2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        id="minimoCol3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        id="minimoCol4"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Fila 6 */}
                </form>
                {/* Form */}

                <div className="col-2 pt-4">
                  <h4 className="rounded-pill bg-light text-success text-center">
                    Paso 2:
                  </h4>
                </div>
                <p>
                  Consiste en buscar el mínimo valor de cada fia y restarlo con
                  los demás valores de la misma fila
                </p>

                {/* Boton Calcular paso 2 */}
                <div className="row mt-2 text-center">
                  <div className="col">
                    <button
                      className="acording btn btn-outline-success"
                      onClick={principal}
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Calcular paso 2
                    </button>
                  </div>
                </div>
                {/* Boton Calcular paso 2 */}
              </div>
            </div>
          </div>
          {/* Form Calculo Paso 1 */}

          {/* Form Calculo Paso 2*/}
          <div className="row mt-4 mb-4">
            <div className="col">
              <div className="collapse" id="collapseExample2">
                {/* Form */}
                <form action="">
                  {/* Fila 1 */}
                  <div className="row">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Minimo filas"
                        disabled
                      />
                    </div>
                  </div>
                  {/* Fila 1 */}

                  {/* Fila 2 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        placeholder=""
                        id="col4_f1"
                      />
                    </div>
                  </div>
                  {/* Fila 2 */}

                  {/* Fila 3 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        placeholder=""
                        id="col4_f2"
                      />
                    </div>
                  </div>
                  {/* Fila 3 */}

                  {/* Fila 4 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f3"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        placeholder=""
                        id="col4_f3"
                      />
                    </div>
                  </div>
                  {/* Fila 4 */}

                  {/* Fila 5 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col1_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col2_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col3_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        id="col4_f4"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light"
                        placeholder=""
                        id="col4_f4"
                      />
                    </div>
                  </div>
                  {/* Fila 5 */}
                </form>
                {/* Form */}
              </div>
            </div>
          </div>
          {/* Form Calculo Paso 2*/}
        </div>
      </div>
    </>
  );
}
