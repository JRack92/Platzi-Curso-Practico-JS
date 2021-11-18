//Codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base) {
  return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

//Codigo del circulo
console.group("Circulo");
function diametroCirculo(radioCirculo) {
  return radioCirculo * 2;
}

function perimetroCirculo(radio) {
  const diematro = diametroCirculo(radio);
  return diematro * Math.PI;
}

function areaCirculo(radio) {
  return radio * radio * Math.PI;
}
console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("InputTrianguloLado1");
  const lado2 = document.getElementById("InputTrianguloLado2");
  const base = document.getElementById("InputTrianguloBase");

  const lado1Value = lado1.value;
  const lado2Value = lado2.value;
  const baseValue = base.value;

  const perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
