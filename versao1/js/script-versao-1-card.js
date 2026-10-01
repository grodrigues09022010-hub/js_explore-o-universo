// procure e selecione o elemento com a classe card-destino
// e guarde em uma variavel chamada primeiroCard
let primeiroCard = document.querySelector(".card-destino")

// procure e selecione o botão de curiosidade da lua
let botaoCuriosidade = document.querySelector(".botao-curiosidade");

// procure e selecione o paragrafo com a curiosidade sobre a lua 
let curiosidade = document.querySelector(".curiosidade");

// monitore o clique no botao de curiosidade e , quando acontecer o clique, verifique SE a curiosidade está oculta. Se estiver, faça ficar visivel, mude o aria-expanded para true e troque o texto do botão para "Ocultar curiosidade".
botaoCuriosidade.addEventListener("click", function(){
    if(curiosidade.hidden){
        // faça-o aparecer
        curiosidade.hidden = false

        // mude o atributo aria-expanded para true
        botaoCuriosidade.setAttribute("aria-expanded", "true");

        //troque o texto do botão para Ocultar curiosidade
        botaoCuriosidade.textContent = "Ocultar curiosidades"
    } else {
        curiosidade.hidden = true
        botaoCuriosidade.setAttribute("aria-expanded", "false");
        botaoCuriosidade.textContent = "Ver curiosidades"
    }
});