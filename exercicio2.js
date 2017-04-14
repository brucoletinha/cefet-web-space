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
let imagem_atual=0;

function antimagem (event)
{
	let img = document.querySelector("#galeria img");
	if(imagem_atual===0)
	{
		imagem_atual=4;
	}
	else
	{
		imagem_atual--;
	}
	img.src = servidorDasImagens + todasAsImagens[imagem_atual];
}

function proximagem (event)
{
	let img = document.querySelector("#galeria img");
	if(imagem_atual===4)
	{
		imagem_atual=0;
	}
	else
	{
		imagem_atual++;
	}
	img.src = servidorDasImagens + todasAsImagens[imagem_atual];
}

function inicia ()
{
	let ant = document.querySelector("#anterior");
	let prox = document.querySelector("#proximo");
	ant.addEventListener('click',antimagem,false);
	prox.addEventListener('click',proximagem,false);
}

document.addEventListener("DOMContentLoaded",inicia,false);
