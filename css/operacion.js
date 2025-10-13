function obtenerNumeros() {
  const n1 = Number(document.getElementById("num1").value);
  const n2 = Number(document.getElementById("num2").value);
  return [n1, n2];
}

// Funciones matemáticas
function suma() {
  const [n1, n2] = obtenerNumeros();
  document.getElementById("resultado").textContent = n1 + n2;
}

function resta() {
  const [n1, n2] = obtenerNumeros();
  document.getElementById("resultado").textContent = n1 - n2;
}

function division() {
  const [n1, n2] = obtenerNumeros();
  if (n2 === 0) {
    alert("No se puede dividir entre 0");
    return;
  }
  document.getElementById("resultado").textContent = n1 / n2;
}

function multiplicacion() {
  const [n1, n2] = obtenerNumeros();
  document.getElementById("resultado").textContent = n1 * n2;
}

// Asignar funciones a los botones
document.querySelector(".boton1").addEventListener("click", suma);
document.querySelector(".boton2").addEventListener("click", resta);
document.querySelector(".boton3").addEventListener("click", division);
document.querySelector(".boton4").addEventListener("click", multiplicacion);