const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    
    aba.addEventListener("click", function() {
       
        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)


    });
});

function selecionarAba (aba){
    
    const abaSelecionado = document.querySelector(".aba.selecionado");   
    abaSelecionado.classList.remove("selecionado")
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba (aba) {

    const informacaoSelecionada = document.
    querySelector(".informacao.selecionado");   
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAda = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAda)
    informacaoASerMostrada.classList.add("selecionado")
}
