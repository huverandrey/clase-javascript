


/*console.log(document)

var titulos=document.getElementsByTagName('h1');
console.log(titulos);

textos_rojo=document.getElementsByClassName('rojo');
console.log(textos_rojo[1].textContent)
textos_rojo[1].textContent="grupo 175";

var fecha=document.getElementById("fecha");
console.log(fecha);*/

function cambiar_mensaje(){
	alert("hola");
	var textos_rojo=document.getElementsByClassName('rojo');
	/*console.log(textos_rojo[1].textContent)*/
	textos_rojo[1].textContent="grupo 175";
}

	


function resultado(){
	var precio=document.getElementById("precio").value;
	var resultado=precio*0.19;
	var span_resultado=document.getElementById("ho")
	span_resultado.textContent=resultado
}