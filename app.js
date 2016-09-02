window.addEventListener("load", function() {
	var boton = document.getElementById("convertir");
	boton.addEventListener("click", function() {
		var tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
		var montoSoles = parseFloat(document.getElementById("montoSoles").value);

		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El resultado es " + convertir(tipoCambio,montoSoles) + "</p>";
	});

	function convertir(tipoCambio,montoSoles ) {
		return (montoSoles/tipoCambio).toFixed(2);

	}
});