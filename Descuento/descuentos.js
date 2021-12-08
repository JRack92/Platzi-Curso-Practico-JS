function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const inputDiscount = document.getElementById("InputDiscount");

  const priceValue = parseInt(inputPrice.value);
  const priceDiscount = parseInt(inputDiscount.value);

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    priceDiscount
  );

  document.getElementById("ResultPrice").innerText = `El precio con descuento es ${precioConDescuento}`;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
