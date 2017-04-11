// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

function antimagem (event)
{
	
}

function proximagem (event)
{

}

function inicia ()
{
	let ant = document.querySelector("#anterior");
	let prox = document.querySelector("#proximo");
	ant.addEventListener('click',antimagem,false);
	prox.addEventListener('click',proximagem,false);
}

document.addEventListener("DOMContentLoaded",inicia,false);
