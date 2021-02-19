import React from "react";
import HungaroTeoria from "./HungaroTeoria";

export default function Hungaro() {
  function nombreFilas() {
    let lstNumero1 = document.getElementsByClassName("columna0"),
      arrayGuardarNombreFilas = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardarNombreFilas[i] = lstNumero1[i].value;
    }
    console.log(arrayGuardarNombreFilas);
    //  Imprime el array

    // // LLenar form paso 1
    // Llenar NomF1
    document.getElementsByClassName("nombreFila1")[0].value =
      arrayGuardarNombreFilas[0];
    // Llenar NomF1_2
    document.getElementsByClassName("nombreFila1")[1].value =
      arrayGuardarNombreFilas[0];
    // Llenar NomF1_2_3
    document.getElementsByClassName("nombreFila1")[2].value =
      arrayGuardarNombreFilas[0];

    // Llenar NomF2
    document.getElementsByClassName("nombreFila2")[0].value =
      arrayGuardarNombreFilas[1];
    // Llenar NomF2_2
    document.getElementsByClassName("nombreFila2")[1].value =
      arrayGuardarNombreFilas[1];
    // Llenar NomF2_2_3
    document.getElementsByClassName("nombreFila2")[2].value =
      arrayGuardarNombreFilas[1];

    // Llenar NomF3
    document.getElementsByClassName("nombreFila3")[0].value =
      arrayGuardarNombreFilas[2];
    // Llenar NomF3_2
    document.getElementsByClassName("nombreFila3")[1].value =
      arrayGuardarNombreFilas[2];
    // Llenar NomF3_2_3
    document.getElementsByClassName("nombreFila3")[2].value =
      arrayGuardarNombreFilas[2];

    // Llenar NomF4
    document.getElementsByClassName("nombreFila4")[0].value =
      arrayGuardarNombreFilas[3];
    // Llenar NomF4_2
    document.getElementsByClassName("nombreFila4")[1].value =
      arrayGuardarNombreFilas[3];
    // Llenar NomF4_2
    document.getElementsByClassName("nombreFila4")[2].value =
      arrayGuardarNombreFilas[3];
  }

  function nombreColumnas() {
    let lstNumero1 = document.getElementsByClassName("fila0"),
      arrayGuardarNombreColumnas = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardarNombreColumnas[i] = lstNumero1[i].value;
    }
    console.log(arrayGuardarNombreColumnas);
    //  Imprime el array

    // // LLenar form paso 1
    // Llenar NomF1
    document.getElementsByClassName("nombreColumna1")[0].value =
      arrayGuardarNombreColumnas[0];
    // Llenar NomF1_2
    document.getElementsByClassName("nombreColumna1")[1].value =
      arrayGuardarNombreColumnas[0];
    // Llenar NomF1_2_3
    document.getElementsByClassName("nombreColumna1")[2].value =
      arrayGuardarNombreColumnas[0];

    // Llenar NomF2
    document.getElementsByClassName("nombreColumna2")[0].value =
      arrayGuardarNombreColumnas[1];
    // Llenar NomF2_2
    document.getElementsByClassName("nombreColumna2")[1].value =
      arrayGuardarNombreColumnas[1];
    // Llenar NomF2_2_3
    document.getElementsByClassName("nombreColumna2")[2].value =
      arrayGuardarNombreColumnas[1];

    // Llenar NomF3
    document.getElementsByClassName("nombreColumna3")[0].value =
      arrayGuardarNombreColumnas[2];
    // Llenar NomF3_2
    document.getElementsByClassName("nombreColumna3")[1].value =
      arrayGuardarNombreColumnas[2];
    // Llenar NomF3_2_3
    document.getElementsByClassName("nombreColumna3")[2].value =
      arrayGuardarNombreColumnas[2];

    // Llenar NomF4
    document.getElementsByClassName("nombreColumna4")[0].value =
      arrayGuardarNombreColumnas[3];
    // Llenar NomF4_2
    document.getElementsByClassName("nombreColumna4")[1].value =
      arrayGuardarNombreColumnas[3];
    // Llenar NomF4_2_3
    document.getElementsByClassName("nombreColumna4")[2].value =
      arrayGuardarNombreColumnas[3];
  }

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

    // LLenar form paso 1
    // Llenar col1_f1
    document.getElementsByClassName("col1_f1")[0].value = arrayRestado1[0];
    // Llenar col1_f2
    document.getElementsByClassName("col1_f2")[0].value = arrayRestado1[1];
    // Llenar col1_f3
    document.getElementsByClassName("col1_f3")[0].value = arrayRestado1[2];
    // Llenar col1_f4
    document.getElementsByClassName("col1_f4")[0].value = arrayRestado1[3];

    // LLenar form paso 2
    // Llenar col1_f1
    document.getElementsByClassName("col1_f1_2")[0].value = arrayRestado1[0];
    // Llenar col1_f2
    document.getElementsByClassName("col1_f2_2")[0].value = arrayRestado1[1];
    // Llenar col1_f3
    document.getElementsByClassName("col1_f3_2")[0].value = arrayRestado1[2];
    // Llenar col1_f4
    document.getElementsByClassName("col1_f4_2")[0].value = arrayRestado1[3];
    // LLenar form paso 1
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

    // LLenar form paso 1
    // Llenar col2_f1
    document.getElementsByClassName("col2_f1")[0].value = arrayRestado2[0];
    // Llenar col2_f2
    document.getElementsByClassName("col2_f2")[0].value = arrayRestado2[1];
    // Llenar col2_f3
    document.getElementsByClassName("col2_f3")[0].value = arrayRestado2[2];
    // Llenar col2_f4
    document.getElementsByClassName("col2_f4")[0].value = arrayRestado2[3];

    // LLenar form paso 2
    // Llenar col2_f1
    document.getElementsByClassName("col2_f1_2")[0].value = arrayRestado2[0];
    // Llenar col2_f2
    document.getElementsByClassName("col2_f2_2")[0].value = arrayRestado2[1];
    // Llenar col2_f3
    document.getElementsByClassName("col2_f3_2")[0].value = arrayRestado2[2];
    // Llenar col2_f4
    document.getElementsByClassName("col2_f4_2")[0].value = arrayRestado2[3];
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

    // LLenar form paso 1
    // Llenar col3_f1
    document.getElementsByClassName("col3_f1")[0].value = arrayRestado3[0];
    // Llenar col3_f2
    document.getElementsByClassName("col3_f2")[0].value = arrayRestado3[1];
    // Llenar col3_f3
    document.getElementsByClassName("col3_f3")[0].value = arrayRestado3[2];
    // Llenar col3_f4
    document.getElementsByClassName("col3_f4")[0].value = arrayRestado3[3];

    // LLenar form paso 2
    // Llenar col3_f1
    document.getElementsByClassName("col3_f1_2")[0].value = arrayRestado3[0];
    // Llenar col3_f2
    document.getElementsByClassName("col3_f2_2")[0].value = arrayRestado3[1];
    // Llenar col3_f3
    document.getElementsByClassName("col3_f3_2")[0].value = arrayRestado3[2];
    // Llenar col3_f4
    document.getElementsByClassName("col3_f4_2")[0].value = arrayRestado3[3];
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

    // LLenar form paso 1
    // Llenar col4_f1
    document.getElementsByClassName("col4_f1")[0].value = arrayRestado4[0];
    // Llenar col4_f2
    document.getElementsByClassName("col4_f2")[0].value = arrayRestado4[1];
    // Llenar col4_f3
    document.getElementsByClassName("col4_f3")[0].value = arrayRestado4[2];
    // Llenar col4_f4
    document.getElementsByClassName("col4_f4")[0].value = arrayRestado4[3];

    // LLenar form paso 2
    // Llenar col4_f1
    document.getElementsByClassName("col4_f1_2")[0].value = arrayRestado4[0];
    // Llenar col4_f2
    document.getElementsByClassName("col4_f2_2")[0].value = arrayRestado4[1];
    // Llenar col4_f3
    document.getElementsByClassName("col4_f3_2")[0].value = arrayRestado4[2];
    // Llenar col4_f4
    document.getElementsByClassName("col4_f4_2")[0].value = arrayRestado4[3];
  }



  function MenorFila1() {
    let lstNumero1 = document.getElementsByClassName("fila1"),
      arrayGuardarFila1 = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardarFila1[i] = lstNumero1[i].value;
      // Busca el valor minimo del array
      const min = Math.min(...arrayGuardarFila1);
      // Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementsByClassName("minimoFila1")[0].value = min;
      document.getElementsByClassName("minimoFila1")[1].value = min;

      //  Resta ese array con el valor minimo del array
      var arrayRestadoFila1 = arrayGuardarFila1.map((v) => v - min);
    }
    // Imprime el array
    console.log(arrayRestadoFila1);

    // // LLenar form paso 2 resuelto
    // Llenar fila1_col1
    document.getElementsByClassName("fila1_col1")[0].value =
      arrayRestadoFila1[0];
    // Llenar fila1_col2
    document.getElementsByClassName("fila1_col2")[0].value =
      arrayRestadoFila1[1];
    // // Llenar fila1_col3
    document.getElementsByClassName("fila1_col3")[0].value =
      arrayRestadoFila1[2];
    // // Llenar fila1_col4
    document.getElementsByClassName("fila1_col4")[0].value =
      arrayRestadoFila1[3];

    // // LLenar form paso 3 
    // Llenar fila1_col1
    document.getElementsByClassName("fila1_col1")[1].value =
      arrayRestadoFila1[0];
    // Llenar fila1_col2
    document.getElementsByClassName("fila1_col2")[1].value =
      arrayRestadoFila1[1];
    // // Llenar fila1_col3
    document.getElementsByClassName("fila1_col3")[1].value =
      arrayRestadoFila1[2];
    // // Llenar fila1_col4
    document.getElementsByClassName("fila1_col4")[1].value =
      arrayRestadoFila1[3];
  }

  function MenorFila2() {
    let lstNumero1 = document.getElementsByClassName("fila2"),
      arrayGuardarFila2 = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardarFila2[i] = lstNumero1[i].value;
      // Busca el valor minimo del array
      const min = Math.min(...arrayGuardarFila2);
      // Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementsByClassName("minimoFila2")[0].value = min;
      document.getElementsByClassName("minimoFila2")[1].value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestadoFila2 = arrayGuardarFila2.map((v) => v - min);
    }
    // Imprime el array
    console.log(arrayRestadoFila2);

    // LLenar form paso 2 resuelto
    // Llenar fila2_col1
    document.getElementsByClassName("fila2_col1")[0].value =
      arrayRestadoFila2[0];
    // Llenar fila2_col2
    document.getElementsByClassName("fila2_col2")[0].value =
      arrayRestadoFila2[1];
    // Llenar fila2_col3
    document.getElementsByClassName("fila2_col3")[0].value =
      arrayRestadoFila2[2];
    // Llenar fila2_col4
    document.getElementsByClassName("fila2_col4")[0].value =
      arrayRestadoFila2[3];

    // LLenar form paso 3
    // Llenar fila2_col1
    document.getElementsByClassName("fila2_col1")[1].value =
      arrayRestadoFila2[0];
    // Llenar fila2_col2
    document.getElementsByClassName("fila2_col2")[1].value =
      arrayRestadoFila2[1];
    // Llenar fila2_col3
    document.getElementsByClassName("fila2_col3")[1].value =
      arrayRestadoFila2[2];
    // Llenar fila2_col4
    document.getElementsByClassName("fila2_col4")[1].value =
      arrayRestadoFila2[3];
  }

  function MenorFila3() {
    let lstNumero1 = document.getElementsByClassName("fila3"),
      arrayGuardarFila3 = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardarFila3[i] = lstNumero1[i].value;
      // Busca el valor minimo del array
      const min = Math.min(...arrayGuardarFila3);
      // Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementsByClassName("minimoFila3")[0].value = min;
      document.getElementsByClassName("minimoFila3")[1].value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestadoFila3 = arrayGuardarFila3.map((v) => v - min);
    }
    // Imprime el array
    console.log(arrayRestadoFila3);

    // LLenar form paso 2 resuelto
    // Llenar fila3_col1
    document.getElementsByClassName("fila3_col1")[0].value =
      arrayRestadoFila3[0];
    // Llenar fila3_col2
    document.getElementsByClassName("fila3_col2")[0].value =
      arrayRestadoFila3[1];
    // Llenar fila3_col3
    document.getElementsByClassName("fila3_col3")[0].value =
      arrayRestadoFila3[2];
    // Llenar fila3_col4
    document.getElementsByClassName("fila3_col4")[0].value =
      arrayRestadoFila3[3];

    // LLenar form paso 3
    // Llenar fila3_col1
    document.getElementsByClassName("fila3_col1")[1].value =
      arrayRestadoFila3[0];
    // Llenar fila3_col2
    document.getElementsByClassName("fila3_col2")[1].value =
      arrayRestadoFila3[1];
    // Llenar fila3_col3
    document.getElementsByClassName("fila3_col3")[1].value =
      arrayRestadoFila3[2];
    // Llenar fila3_col4
    document.getElementsByClassName("fila3_col4")[1].value =
      arrayRestadoFila3[3];
  }

  function MenorFila4() {
    let lstNumero1 = document.getElementsByClassName("fila4"),
      arrayGuardarFila4 = [];
    for (var i = 0; i < lstNumero1.length; i++) {
      arrayGuardarFila4[i] = lstNumero1[i].value;
      // Busca el valor minimo del array
      const min = Math.min(...arrayGuardarFila4);
      // Almacena ese valor en la etiqueta con id "minimoColx"
      document.getElementsByClassName("minimoFila4")[0].value = min;
      document.getElementsByClassName("minimoFila4")[1].value = min;
      //  Resta ese array con el valor minimo del array
      var arrayRestadoFila4 = arrayGuardarFila4.map((v) => v - min);
    }
    // Imprime el array
    console.log(arrayRestadoFila4);

    // LLenar form paso 2 resuelto
    // Llenar fila4_col1
    document.getElementsByClassName("fila4_col1")[0].value =
      arrayRestadoFila4[0];
    // Llenar fila4_col2
    document.getElementsByClassName("fila4_col2")[0].value =
      arrayRestadoFila4[1];
    // Llenar fila4_col3
    document.getElementsByClassName("fila4_col3")[0].value =
      arrayRestadoFila4[2];
    // Llenar fila4_col4
    document.getElementsByClassName("fila4_col4")[0].value =
      arrayRestadoFila4[3];

    // LLenar form paso 3
    // Llenar fila4_col1
    document.getElementsByClassName("fila4_col1")[1].value =
      arrayRestadoFila4[0];
    // Llenar fila4_col2
    document.getElementsByClassName("fila4_col2")[1].value =
      arrayRestadoFila4[1];
    // Llenar fila4_col3
    document.getElementsByClassName("fila4_col3")[1].value =
      arrayRestadoFila4[2];
    // Llenar fila4_col4
    document.getElementsByClassName("fila4_col4")[1].value =
      arrayRestadoFila4[3];
  }


  const paso1 = () => {
    nombreFilas();
    nombreColumnas();
    MenorColumna1();
    MenorColumna2();
    MenorColumna3();
    MenorColumna4();
  };

  const paso2 = () => {
    MenorFila1();
    MenorFila2();
    MenorFila3();
    MenorFila4();
  };

  const paso3 = () => {
    
  };

  return (
    <>
      <div className="container pt-4">
        <div className="row pb-4">
          <HungaroTeoria />
        </div>
        <div className="row">
          <div className="col-6 offset-3 text-center">
            <div className="alert alert-warning" role="alert">
              Inserte los costos en cada casilla para armar la matriz
            </div>
          </div>
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
                  className="form-control fila0"
                  placeholder="Columna"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control fila0"
                  placeholder="Columna"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control fila0"
                  placeholder="Columna"
                />
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control fila0"
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
                  className="form-control columna0"
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
                  className="form-control columna0"
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
                  className="form-control columna0"
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
                  className="form-control columna0"
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

          <div className="col-2 pt-4">
            <h4 className="rounded-pill bg-light text-success text-center">
              Paso 1:
            </h4>
          </div>
          <p>
            Consiste en buscar el mínimo valor de cada columna y restarlo con
            los demás valores de la misma columna
          </p>

          {/* Boton Calcular paso 1 */}
          <div className="row mt-2 text-center">
            <div className="col">
              <button
                className="acording btn btn-outline-success"
                onClick={paso1}
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
                        className="form-control nombreColumna1"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna2"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna3"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna4"
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
                        className="form-control nombreFila1"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f1"
                        placeholder=""
                        id="col1_f1"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f1"
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
                        className="form-control nombreFila2"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f2"
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
                        className="form-control nombreFila3"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f3"
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
                        className="form-control nombreFila4"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f4"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Fila 5 */}

                  {/* Fila 6 */}
                  <div className="row mt-2">
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-warning"
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
                      onClick={paso2}
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
                        className="form-control nombreColumna1"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna2"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna3"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna4"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-warning"
                        placeholder=""
                        value="Minimo filas"
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
                        className="form-control nombreFila1"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f1_2 fila1 fila1_col1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f1_2 fila1 fila1_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f1_2 fila1 fila1_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f1_2 fila1 fila1_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila1"
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
                        className="form-control nombreFila2"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f2_2 fila2 fila2_col1"
                        placeholder=""
                        id="col1_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f2_2 fila2 fila2_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f2_2 fila2 fila2_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f2_2 fila2 fila2_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila2"
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
                        className="form-control nombreFila3"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f3_2 fila3 fila3_col1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f3_2 fila3 fila3_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f3_2 fila3 fila3_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f3_2 fila3 fila3_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila3"
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
                        className="form-control nombreFila4"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f4_2 fila4 fila4_col1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f4_2 fila4 fila4_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f4_2 fila4 fila4_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f4_2 fila4 fila4_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila4"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Fila 5 */}
                </form>
                {/* Form */}
                <div className="col-2 pt-4">
                  <h4 className="rounded-pill bg-light text-success text-center">
                    Paso 3:
                  </h4>
                </div>
                <p>Consiste en realizar las asignaciones:</p>
                -Observar cuales son las filas y columnas donde hay un cero
                solito
                {/* Boton Calcular paso 2 */}
                <div className="row mt-2 text-center">
                  <div className="col">
                    <button
                      className="acording btn btn-outline-success"
                      onClick={paso3}
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Calcular paso 3
                    </button>
                  </div>
                </div>
                {/* Boton Calcular paso 2 */}
              </div>
            </div>
          </div>
          {/* Form Calculo Paso 2*/}

          {/* Form Calculo Paso 3*/}
          <div className="row mt-2 mb-4">
            <div className="col">
              <div className="collapse" id="collapseExample3">
                <span className="badge bg-primary">Marcador1:</span>
                <p>Con este color se identificaran los 0 asignados</p>

                <span className="badge bg-danger">Marcador1:</span>
                <p>Con este color se identificaran los 0 no asignados</p>

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
                        className="form-control nombreColumna1"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna2"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna3"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control nombreColumna4"
                        placeholder="Columna"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-warning"
                        placeholder=""
                        value="Minimo filas"
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
                        className="form-control nombreFila1"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f1_2 fila1 fila1_col1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f1_2 fila1 fila1_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f1_2 fila1 fila1_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f1_2 fila1 fila1_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila1"
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
                        className="form-control nombreFila2"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f2_2 fila2 fila2_col1"
                        placeholder=""
                        id="col1_f2"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f2_2 fila2 fila2_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f2_2 fila2 fila2_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f2_2 fila2 fila2_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila2"
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
                        className="form-control nombreFila3"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f3_2 fila3 fila3_col1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f3_2 fila3 fila3_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f3_2 fila3 fila3_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f3_2 fila3 fila3_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila3"
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
                        className="form-control nombreFila4"
                        placeholder="Fila"
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col1_f4_2 fila4 fila4_col1"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col2_f4_2 fila4 fila4_col2"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col3_f4_2 fila4 fila4_col3"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control col4_f4_2 fila4 fila4_col4"
                        placeholder=""
                      />
                    </div>
                    <div className="col-sm">
                      <input
                        type="text"
                        className="form-control bg-info text-light minimoFila4"
                        placeholder=""
                      />
                    </div>
                  </div>
                  {/* Fila 5 */}
                </form>
                {/* Form */}
              </div>
            </div>
          </div>
          {/* Form Calculo Paso 3*/}
        </div>
      </div>
    </>
  );
}
