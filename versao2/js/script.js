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

// V2: programação para o recurso de filmagem de destintos
// procurar e selecionar os botões de filtro

const botoesFiltro = document.querySelectorAll("[data-filtro]")

//percorrer/acessar cada botão dentro do botaoFiltro
    botoesFiltro.forEach(function(botaoFiltro){

        botaoFiltro.addEventListener('click', function(){

            const filtro = botaoFiltro.dataset.filtro;
            // percorrendo cada card...
            cards.forEach(function(card){
                // ...guardando a categoria de cada um
                const categoria = card.dataset.categoria;

                // mostrar todos os cards OU apenas os cards da categoria filtrada
                if(filtro === "todos" || categoria === filtro){
                    // entao mostramos os card
                    card.hidden = false
                    
                } else {
                    // entao escondemos os card
                    card.hidden = true
                }
            }) // feixamento do forEach dos cards
            botoesFiltro.forEach(function(botaoFiltro){
                // verificamos se ootao atual foi clicado é o mesmo do filtro
                if(botaoFiltro.dataset.filtro === filtro){
                    botaoFiltro.classList.add("filtro-ativo");
                    // e mudamos o estado para pressionado (true)
                    botaoFiltro.setAttribute("aria-pressed", "true")
                    // se for, adicinamos e classe nele
                }   else    {
                    // senão, retiramos a classe dele
                    botaoFiltro.classList.remove("filtro-ativo")
                    // e mudadmos o estado para não pressionado (false)
                    botaoFiltro.setAttribute("aria-pressed", "false")
                }
            })
            
        })
    })
