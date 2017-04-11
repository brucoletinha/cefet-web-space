// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

function Acaoclick (event){
	if(event.target.innerHTML === "+") {
		event.target.innerHTML = "-";
		event.target.parentNode.classList.add('expandido');
	}
	else {
		event.target.innerHTML = "+";
		event.target.parentNode.classList.remove('expandido');
	}		
}

function inicia (){
	let botaoexpandir = document.querySelectorAll(".botao-expandir-retrair");
	for(let i of botaoexpandir){
		i.addEventListener('click',Acaoclick,false);
	}

}

document.addEventListener("DOMContentLoaded",inicia,false);