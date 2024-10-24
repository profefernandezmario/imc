function calcularIMC() {
  // obtiene los valores del html
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  // calculo del imc
  let imc = peso / altura ** 2;

  // comprobar y reemplazar si no ingreso nada
  if (Number.isNaN(imc)) {
    imc = "<b>"+" Faltaron ingresar valores!! " +"</b>";
  } else {
    imc = imc.toFixed(2);
  }

  // reemplazo en el html
  let mostrar = "El resultado de su IMC es:" + " " + imc;
  document.getElementById("resultado").innerHTML = mostrar;

  // Limpiar las clases anteriores
  document.getElementById("fila1").classList.remove("table-danger");
  document.getElementById("fila2").classList.remove("table-danger");
  document.getElementById("fila3").classList.remove("table-danger");
  document.getElementById("fila4").classList.remove("table-danger");

  //se debe limpiar el mensaje de cadena anterior
  cadena = "..."
  document.getElementById("dato1").innerHTML = cadena;
  document.getElementById("dato2").innerHTML = cadena;
  document.getElementById("dato3").innerHTML = cadena;
  document.getElementById("dato4").innerHTML = cadena;

  // definir el valor a reemplazar en la tabla
  cadena = "<b><i>" + "<-- usted está aquí -->" + "</b></i>";

  // agrego texto a la tabla de pesos
  if (imc < 18.5) {
    document.getElementById("dato1").innerHTML = cadena;
    document.getElementById("fila1").classList.add("table-danger");
  } // Resaltar fila1
  //
  if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById("dato2").innerHTML = cadena;
    document.getElementById("fila2").classList.add("table-danger"); // Resaltar fila2
  }
  //
  if (imc >= 25 && imc <= 29.99) {
    document.getElementById("dato3").innerHTML = cadena;
    document.getElementById("fila3").classList.add("table-danger"); // Resaltar fila3
  }
  if (imc >= 30) {
    document.getElementById("dato4").innerHTML = cadena;
    document.getElementById("fila4").classList.add("table-danger"); // Resaltar fila4
  }

}