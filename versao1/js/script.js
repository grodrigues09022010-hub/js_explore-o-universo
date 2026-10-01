//selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
console.log(cards);

//percorrer todos os cards selecionados e pra cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function(card){
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener('click', function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute('arial-expanded', 'true');
            botaoCuriosidade.textContent = 'Ocultar curiosidade';
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute('arial-expanded', 'false');
            botaoCuriosidade.textContent = 'Ver curiosidade';
        }
    })// fechamento do codigo do botaoCuriosidade

    botaoFavorito.addEventListener('click', function(){
        // aplicar/remover a classe "favoritado"
        let favoritado = card.classList.toggle('favoritado');

        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado);

        // Atualizar o texto do botão (favorito ou favoritado)
        if(favoritado){
            botaoFavorito.textContent = '★ Favoritado'
        } else {
            botaoFavorito.textContent = '☆ Favorito'
        }
    })

})//fechamento for each