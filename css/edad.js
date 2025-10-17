function obtenerNumeros() {
  const n1 = document.getElementById("num1").value.trim();
  const rawN2 = document.getElementById("num2").value.trim();
  const n2 = rawN2 === "" ? NaN : Number(rawN2);
  return [n1, n2];
}

function actualizarResultado(texto) {
  const salida = document.getElementById("resultado");
  if (salida) {
    salida.value = texto;
  }
}

function edad() {
  const [n1, n2] = obtenerNumeros();
  if (!n1 || Number.isNaN(n2)) {
    actualizarResultado("");
    return;
  }
  if (n2 >= 18) {
    actualizarResultado("Mayor de edad");
    
    return;
  }
  actualizarResultado("Menor de edad");
}

document.addEventListener("DOMContentLoaded", () => {
  const campos = ["num1", "num2"];
  campos.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", edad);
    }
  });
});