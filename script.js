function mostraAlerta()
{
    alert("Você finalizou a compra!");
}

window.onload=function(){
    let botaoAlerta = document.getElementById("buy-button");

    botaoAlerta.onclick = function () {
        mostraAlerta() ;
    };
}
