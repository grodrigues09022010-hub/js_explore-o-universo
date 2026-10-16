//selecionar todos os cards
let cards = document.querySelectorAll(".card-destino");
console.log(cards);

//percorrer todos os cards selecionados e pra cada um (separadamente) pegar os botões (botão curiosidade e o botão favoritos)
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade');
    let botaoFavorito = card.querySelector('.botao-favorito');
    let curiosidade = card.querySelector('.curiosidade');

    botaoCuriosidade.addEventListener('click', function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute('arial-expanded', 'true');
            botaoCuriosidade.textContent = 'Ocultar curiosidade';
        } else {
            curiosidade.hidden = true;
            botaoCuriosidade.setAttribute('arial-expanded', 'false');
            botaoCuriosidade.textContent = 'Ver curiosidade';
        }
    })// fechamento do codigo do botaoCuriosidade

    botaoFavorito.addEventListener('click', function () {
        // aplicar/remover a classe "favoritado"
        let favoritado = card.classList.toggle('favoritado');

        // Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado);

        // Atualizar o texto do botão (favorito ou favoritado)
        if (favoritado) {
            botaoFavorito.textContent = '★ Favoritado'
        } else {
            botaoFavorito.textContent = '☆ Favorito'
        }

        //chama a fução de ativação
        atualizarContadorFavoritos();


    })

})//fechamento for each

// V2: programação para o recurso de filmagem de destintos
// procurar e selecionar os botões de filtro

const botoesFiltro = document.querySelectorAll("[data-filtro]")

//percorrer/acessar cada botão dentro do botaoFiltro
botoesFiltro.forEach(function (botaoFiltro) {

    botaoFiltro.addEventListener('click', function () {

        const filtro = botaoFiltro.dataset.filtro;
        // percorrendo cada card...
        cards.forEach(function (card) {
            // ...guardando a categoria de cada um
            const categoria = card.dataset.categoria;

            // mostrar todos os cards OU apenas os cards da categoria filtrada
            if (filtro === "todos" || categoria === filtro) {
                // entao mostramos os card
                card.hidden = false

            } else {
                // entao escondemos os card
                card.hidden = true
            }
        }) // feixamento do forEach dos cards
        botoesFiltro.forEach(function (botaoFiltro) {
            // verificamos se ootao atual foi clicado é o mesmo do filtro
            if (botaoFiltro.dataset.filtro === filtro) {
                botaoFiltro.classList.add("filtro-ativo");
                // e mudamos o estado para pressionado (true)
                botaoFiltro.setAttribute("aria-pressed", "true")
                // se for, adicinamos e classe nele
            } else {
                // senão, retiramos a classe dele
                botaoFiltro.classList.remove("filtro-ativo")
                // e mudadmos o estado para não pressionado (false)
                botaoFiltro.setAttribute("aria-pressed", "false")
            }
        })

    })
})

// Versão 3: script para o menu responsivo
// selecionando os elementos que serão manipulados

// Botao menu
const botaoMenu = document.querySelector(".botao-menu")

// navegação principal
const navegacaoPrincipal = document.querySelector("#navegacao-principal")

// detectar o acionamento do botao
botaoMenu.addEventListener("click", function () {
    // aplicar a classe menu-abeto, o JS deve aplicar ou remover e classe "menu-aberto"
    // classe aplicada? true
    // classe removida? false
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto");

    // atualizar o estado do botão usando aria-expanded
    botaoMenu.setAttribute("aria-expanded", menuAberto);
    // exercicio!
    // se o menu estiver aberto mostre no botao ✖ Fechar 
    // se o menu estiver aberto mostre no botao ☰ Menu

    if (menuAberto) {
        botaoMenu.textContent = '✖ Fechar'
    } else {
        botaoMenu.textContent = '☰ Menu'
    }
});

// selecionando o elemento que apresenta a qualidade de favorito
const quantidadeFavoritos = document.querySelector("#quantidade-favoritos")

// funçao para realizaçao dos favoritos
function atualizarContadorFavoritos() {
    // guardar em memoria a contagem, começando em zero
    let quantidade = 0;

    // percorrer todos os cards, inclusive os ocultos pelos filtros
    cards.forEach(function (card) {
        // verificar se o card possui a card favoritado
        if (card.classList.contains("favoritado")) {
            // se possuir, incrementamos (++) a variavel quantidade
            // incrementar significa adicionar 1
            quantidade++
        }
    })//final forEach

    //apos a contagem atualiza o numero exibido no span HTML
    quantidadeFavoritos.textContent = quantidade

}//final da funçao

// versao 5: curiosidades aleatorias
const tituloCuriosidadeAleatoria = document.querySelector("#titulo-curiosidade-aleatoria")
const explicacaoCuriosidadeAleatoria = document.querySelector("#explicacao-curiosidade-aleatoria")
const botaoCuriosidadeAleatoria = document.querySelector(".botao-curiosidade-aleatoria")

// lista de curiosidades e serem usadas pela função
const curiosidadesUniverso = [
  {
    titulo: "A luz do Sol não chega instantaneamente à Terra",
    explicacao: "A luz viaja pelo espaço e leva cerca de 8 minutos para chegar até nós."
  },
  {
    titulo: "Em Vênus, um dia é mais longo que um ano",
    explicacao: "Vênus leva cerca de 243 dias terrestres para girar uma vez em torno do próprio eixo e cerca de 225 dias para completar uma órbita ao redor do Sol."
  },
  {
    titulo: "Marte tem duas luas pequenas",
    explicacao: "As luas de Marte se chamam Fobos e Deimos. Elas têm formas irregulares, diferentes da forma quase esférica da Lua da Terra."
  },
  {
    titulo: "Júpiter tem uma tempestade gigante",
    explicacao: "A Grande Mancha Vermelha é uma enorme tempestade na atmosfera de Júpiter. Ela é mais larga que a Terra e vem sendo observada há séculos."
  },
  {
    titulo: "Europa pode esconder um oceano",
    explicacao: "A lua Europa, de Júpiter, tem uma crosta de gelo. Observações indicam que pode haver um oceano de água líquida sob essa superfície."
  },
  {
    titulo: "Uma lua de Júpiter é maior que Mercúrio",
    explicacao: "Ganimedes é a maior lua do Sistema Solar. Seu diâmetro é maior que o do planeta Mercúrio."
  },
  {
    titulo: "Os anéis de Saturno são feitos de muitos fragmentos",
    explicacao: "Eles contêm bilhões de pedaços de gelo e rocha, desde grãos muito pequenos até blocos enormes."
  },
  {
    titulo: "A Lua mantém quase sempre a mesma face voltada para a Terra",
    explicacao: "A Lua leva praticamente o mesmo tempo para girar em torno de si e para dar uma volta ao redor da Terra. Por isso, vemos quase sempre o mesmo hemisfério."
  },
  {
    titulo: "Mercúrio pode ter gelo em crateras escuras",
    explicacao: "Em crateras profundas próximas aos polos, há regiões que nunca recebem luz solar direta. Essas áreas podem conservar gelo de água apesar do calor em outras partes do planeta."
  },
  {
    titulo: "O Sol também se move pela galáxia",
    explicacao: "O Sol e seu sistema planetário orbitam o centro da Via Láctea. Uma volta completa leva cerca de 230 milhões de anos terrestres."
  },
  {
    titulo: "A Via Láctea é uma galáxia espiral barrada",
    explicacao: "Ela tem uma região central alongada, em forma de barra, e braços espirais. O Sistema Solar fica numa região chamada Braço de Órion."
  },
  {
    titulo: "Há planetas que orbitam duas estrelas",
    explicacao: "Alguns exoplanetas, que são planetas fora do Sistema Solar, orbitam um par de estrelas em vez de uma estrela só."
  }
];

console.log(curiosidadesUniverso)

function exibirCuriosidadeAleatoria() {
    // curiosidadeUniverso.legth -> quantidade de dados na lista 
    //Math.random() -> gera valores aleatorios entre 0 a 1
    //Math.floor() -> arredonda para baixo
    const indiceAleatorio = Math.floor(Math.random() * curiosidadesUniverso.length)
    
    const curiosidadeEscolha = curiosidadesUniverso[indiceAleatorio]

    // acessando/guardando a curiosidade pelo indice aleatorio (0,1 ou 2)
    //exibindo o titulo da curiosidade escolhida no h3
    tituloCuriosidadeAleatoria.textContent = curiosidadeEscolha.titulo
    //exibindo o explicação da curiosidade escolhida no p
    explicacaoCuriosidadeAleatoria.textContent = curiosidadeEscolha. explicacao
}



// chamamos a mesma função tambem quando clicar no botão
botaoCuriosidadeAleatoria.addEventListener('click', exibirCuriosidadeAleatoria)

//chama a função de forma automatica no momento da entrada no site
exibirCuriosidadeAleatoria()
