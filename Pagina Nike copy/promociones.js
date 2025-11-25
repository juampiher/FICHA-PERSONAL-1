document.getElementById("calcular").onclick = function() {
  let precio = parseFloat(document.getElementById("precio").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let promo = document.getElementById("promo").value;

  let total = precio * cantidad;
  let descuento = 0;

  if (promo === "2x50" && cantidad >= 2) {
    descuento = (precio / 2) * Math.floor(cantidad / 2);
  } else if (promo === "3x2" && cantidad >= 3) {
    descuento = precio * Math.floor(cantidad / 3);
  } else if (promo === "10off" && total >= 30000) {
    descuento = total * 0.10;
  }

  let totalFinal = total - descuento;

  document.getElementById("total").innerHTML = "Total sin descuento: $" + total;
  document.getElementById("descuento").innerHTML = "Descuento aplicado: $" + descuento;
  document.getElementById("final").innerHTML = "Total final: $" + totalFinal;
};
