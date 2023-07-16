let leonardo = window.document.getElementById("leonardo");
let samantha = window.document.getElementById("samantha");
let bruna = window.document.getElementById("bruna");
let setaEsquerda = window.document.getElementById('seta-esquerda');
let setaDireita = window.document.getElementById('seta-direita');



function rolarParaDireita(){
 leonardo.style = "display:none";
 bruna.style = "display: flex";
 setaEsquerda.style = "display: flex; margin-top:75px";
 setaDireita.style = "display: none";
 

}

function rolarParaEsquerda(){
    leonardo.style = "display:flex";
    bruna.style = "display:none";
    setaEsquerda.style = "display: none";
    setaDireita.style = "display: flex";

}