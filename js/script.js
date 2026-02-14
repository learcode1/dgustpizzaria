
const inputCEP = document.getElementById("cep");
const pEndereco = document.getElementById("endereco");
const pTaxa = document.getElementById("taxaEntrega");

let taxaEntrega = 0;


function atualizarStatus() {
  const statusEl = document.querySelector(".status");
  const agora = new Date();
  const hora = agora.getHours();
  const diaSemana = agora.getDay(); 


  
    const aberto = hora >= 19 && hora < 24;
    

  const diaAberto = diaSemana === 3 || diaSemana >= 0;

   if (diaAberto) {
     console.log(` Hoje é dia: ${diaSemana}`)
     console.log(` A hora é: ${hora}`)
    statusEl.innerText = "ABERTO AGORA";
    statusEl.style.background = "#27ae60";
  } else {
      console.log(` Hoje é dia: ${diaSemana}`)
     console.log(` A hora é: ${hora}`)
    statusEl.innerText = "FECHADO";
    statusEl.style.background = "#c0392b";
  }
}

atualizarStatus();
setInterval(atualizarStatus, 60000);


// PRODUTOS 

const produtos = [
  {
    id: 30,
    nome: "Meio a meio 35cm",
    descricao: "Escolha dois sabores para sua pizza meio a meio de 35cm. Caso escolha somente um sabor, nosso sistema não vai contar no pedido.",
    imagem: src = "./assets/img/35cm.png",
    preco: 60,
     tamanhos: [
      { nome: "Calabresa", preco: 25.50 },
      { nome: "Caprichosa", preco: 25.50 },
      { nome: "Mussarela", preco: 25.50 },
      { nome: "Caipira", preco: 30 },
      { nome: "A moda da casa", preco: 30 },
      { nome: "Frango no capricho", preco: 31.50 },
      { nome: "Presunto", preco: 25 },
      { nome: "Mixta", preco: 25 },
      { nome: "Marguerita", preco: 25.50 },
      { nome: "Baianinha", preco: 32.50 },
      { nome: "Portuguesa", preco: 32.50 },
      { nome: "Mussarela especial", preco: 27.50 },
      { nome: "Carne Seca", preco: 37.50 },
      { nome: "Frango com catupiry", preco: 32.50 }
    ]
  },
  {
    id: 40,
    nome: "Meio a meio 45cm",
    descricao: "Escolha dois sabores para sua pizza meio a meio de 45cm. Caso escolha somente um sabor, nosso sistema não vai contar no pedido.",
    imagem: src = "./assets/img/45cm.png",
    preco: 51,
     tamanhos: [
      { nome: "Calabresa", preco: 34 },
      { nome: "Caprichosa", preco: 34 },
      { nome: "Mussarela", preco: 32.50 },
      { nome: "Caipira", preco: 37.50 },
      { nome: "A moda da casa", preco: 37.50 },
      { nome: "Frango no capricho", preco: 37.50 },
      { nome: "Presunto", preco: 31.50 },
      { nome: "Mixta", preco: 32.50 },
      { nome: "Marguerita", preco: 34 },
      { nome: "Baianinha", preco: 39 },
      { nome: "Portuguesa", preco: 37.50 },
      { nome: "Mussarela especial", preco: 34 },
      { nome: "Carne Seca", preco: 45 },
      { nome: "Frango com catupiry", preco: 39 }
    ]
  },
  {
    id: 1,
    nome: "Pizza Calabresa",
    imagem: src = "./assets/img/pizzagenerica.png",
    descricao: " Molho da casa, mussarela, calabresa, cebola roxa e orégano.",
    preco: 51,
    tamanhos: [
      { nome: "35cm", preco: 51 },
      { nome: "45cm", preco: 68 }
    ]
  },
  {
    id: 2,
    nome: "Pizza Caprichosa",
    descricao: "Molho da casa, mussarela, calabresa ralada, tomate, milho e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 51,
     tamanhos: [
      { nome: "35cm", preco: 51 },
      { nome: "45cm", preco: 68 }
    ]
  },
  {
    id: 3,
    nome: "Pizza Mussarela",
    descricao: "Molho da casa, mussarela e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 51,
     tamanhos: [
      { nome: "35cm", preco: 51 },
      { nome: "45cm", preco: 65 }
    ]
  },
  {
    id: 4,
    nome: "Caipira",
    descricao: "Molho da casa, mussarela, frango desfiado, milho, tomate, azeitona e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 60,
     tamanhos: [
      { nome: "35cm", preco: 60 },
      { nome: "45cm", preco: 75 }
    ]
  },
  {
    id: 5,
    nome: "A moda da casa",
    descricao: "Molho da casa, mussarela, costela desfiada, queijo minas, cebola roxa e orégano",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 60,
     tamanhos: [
      { nome: "35cm", preco: 60 },
      { nome: "45cm", preco: 75 }
    ]
  },
  {
    id: 6,
    nome: "Frango no capricho",
    descricao: "Molho da casa, mussarela, frango desfiado, requeijão, azeitona, tomate e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 60,
     tamanhos: [
      { nome: "35cm", preco: 63 },
      { nome: "45cm", preco: 75 }
    ]
  },
  {
    id: 7,
    nome: "Presunto",
    descricao: "Molho da casa, mussarela, presunto ralado, tomate e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 50,
     tamanhos: [
      { nome: "35cm", preco: 50 },
      { nome: "45cm", preco: 63 }
    ]
  },
  {
    id: 8,
    nome: "Mixta",
    descricao: "Molho da casa, mussarela, presunto, calabresa, milho, palmito e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 50,
     tamanhos: [
      { nome: "35cm", preco: 50 },
      { nome: "45cm", preco: 65 }
    ]
  },
  {
    id: 9,
    nome: "Marguerita",
    descricao: "Molho da casa, mussarela, tomate, mangericão e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 51,
     tamanhos: [
      { nome: "35cm", preco: 51 },
      { nome: "45cm", preco: 68 }
    ]
  },
  {
    id: 10,
    nome: "Baianinha",
    descricao: "Molho da casa, mussarela, frango desfiado, pimenta calabresa, cebola roxa, milho, tomate, cheiro verde, azeitonas, requeijão e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 51,
     tamanhos: [
      { nome: "35cm", preco: 65 },
      { nome: "45cm", preco: 78 }
    ]
  },
   {
    id: 11,
    nome: "Portuguesa",
    descricao: "Molho da casa, mussarela, presunto, ovos, cebola, milho, azeitona, tomate, pimentão e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 65,
     tamanhos: [
      { nome: "35cm", preco: 65 },
      { nome: "45cm", preco: 75 }
    ]
  },
   {
    id: 12,
    nome: "Mussarela especial",
    descricao: "Molho da casa, mussarela, alho torrado, palmito e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 55,
     tamanhos: [
      { nome: "35cm", preco: 55 },
      { nome: "45cm", preco: 68 }
    ]
  },
   {
    id: 13,
    nome: "Carne Seca",
    descricao: "Molho da casa, mussarela, carne seca desfiada, cebola, requeijão e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 75,
     tamanhos: [
      { nome: "35cm", preco: 75 },
      { nome: "45cm", preco: 90 }
    ]
  },
  {
    id: 14,
    nome: "Frango com catupiry",
    descricao: "Molho da casa, mussarela, frango desfiado, tomate, catupiry e orégano.",
    imagem: src = "./assets/img/pizzagenerica.png",
    preco: 65,
     tamanhos: [
      { nome: "35cm", preco: 65 },
      { nome: "45cm", preco: 78 }
    ]
  },
 {
    id: 15,
    nome: "Coca-Cola 1.5L",
    descricao: "Coca-Cola 1.5L.",
    imagem: src = "./assets/img/coca15normal.png",
    preco: 10,
     tamanhos: [
      { nome: "Coca-Cola", preco: 10 }
    ]
  },
    {
    id: 16,
    nome: "Coca-Cola Zero 1.5L",
    descricao: "Coca-cola Zero 1.5L.",
    imagem: src = "./assets/img/coca15zero.png",
    preco: 10,
     tamanhos: [
      { nome: "Coca-Cola Zero", preco: 10 }
    ]
  },

];

desativados = [
 {
    id: 15,
    nome: "Coca-Cola lata",
    descricao: "Coca-Cola lata 350ml.",
    imagem: src = "./assets/img/coca.png",
    preco: 10,
     tamanhos: [
      { nome: "Coca-Cola", preco: 10 }
    ]
  },
    {
    id: 16,
    nome: "Guaraná lata",
    descricao: "Guaraná lata 350ml.",
    imagem: src = "./assets/img/guarana.png",
    preco: 6.50,
     tamanhos: [
      { nome: "Guaraná", preco: 6.50 }
    ]
  },
]


const cardapioEl = document.querySelector(".cardapio");
const carrinhoEl = document.getElementById("carrinho");
const listaCarrinhoEl = document.getElementById("listaCarrinho");
const totalEl = document.getElementById("total");
const modal = document.getElementById("modalProduto");
const modalNome = document.getElementById("modalNome");
const modalDescricao = document.getElementById("modalDescricao");
const modalPreco = document.getElementById("modalPreco");
const btnAddCarrinho = document.getElementById("btnAddCarrinho");
const checkoutEl = document.getElementById("checkout");
let produtoSelecionado = null;
let tamanhoSelecionado = null;
let saboresSelecionados = [];
let modoMeioAMeio = false;
let carrinho = [];

//  CARDÁPIO


function renderizarCardapio() {
  cardapioEl.innerHTML = "";



  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");

    const precoInicial = produto.tamanhos[0].preco;

    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>A partir de R$ ${precoInicial.toFixed(2)}</p>
      <button>Ver produto</button>
    `;

    div.querySelector("button").addEventListener("click", () => {
      abrirModal(produto);
    });
    

    cardapioEl.appendChild(div);
  });
}

// MODAL




function abrirModal(produto) {
  produtoSelecionado = produto;
  tamanhoSelecionado = produto.tamanhos[0];
  saboresSelecionados = produtos.nome
 


  document.getElementById("modalNome").textContent = produto.nome;
  document.getElementById("modalDescricao").textContent = produto.descricao;
  document.getElementById("modalImagem").src = produto.imagem;

  const opcoes = document.getElementById("opcoesTamanho");
  opcoes.innerHTML = "";



  produto.tamanhos.forEach((tamanho, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${tamanho.nome} - R$ ${tamanho.preco.toFixed(2)}`;
    
    btn.dataset.index = index;

    if (index === 0) btn.classList.add("ativo");

    btn.onclick = () => selecionarTamanho(tamanho, btn);
    opcoes.appendChild(btn);
  });

  document.getElementById("modalPreco").textContent =
    tamanhoSelecionado.preco.toFixed(2);

  document.getElementById("modalProduto").style.display = "flex";

}

function selecionarTamanho(tamanho, botao) {

  const botoes = document.querySelectorAll("#opcoesTamanho button");

  // PRODUTO MEIO A MEIO
  if (produtoSelecionado.nome.includes("Meio a meio")) {

    const ativos = document.querySelectorAll("#opcoesTamanho button.ativo");


    if (ativos.length >= 2) {
      botoes.forEach(btn => btn.classList.remove("ativo"));
    }

    botao.classList.add("ativo");

  
    let total = 0;

  document
    .querySelectorAll("#opcoesTamanho button.ativo")
    .forEach(btn => {
      const index = Number(btn.dataset.index);
      total += produtoSelecionado.tamanhos[index].preco;
    });

  document.getElementById("modalPreco").textContent = total.toFixed(2);

  } 
  // PRODUTO NORMAL
  else {
    tamanhoSelecionado = tamanho;

    botoes.forEach(btn => btn.classList.remove("ativo"));
    botao.classList.add("ativo");

    document.getElementById("modalPreco").textContent =
      tamanho.preco.toFixed(2);
  }
}



function selecionarSabor(produto, botao) {

  saboresSelecionados.push(produto);
  botao.classList.add("ativo");

  calcularPrecoMeioAMeio();
}




function fecharModal() {
  modal.style.display = "none";
  produtoSelecionado = null;
  tamanhoSelecionado = null;
  saboresSelecionados = [];
  modoMeioAMeio = false;
}




// CARRINHO

function abrirAviso() {
  const avisoEl = document.getElementById("modalAviso");
  avisoEl.style.display = "flex";
}

function fecharAviso() {
  const avisoEl = document.getElementById("modalAviso");
  avisoEl.style.display = "none";
}

btnAddCarrinho.addEventListener("click", () => {
  if (!produtoSelecionado) return;

  if (document.querySelector(".status").innerText === "FECHADO") {
    abrirAviso();
    document.getElementById("btnFecharAviso").onclick = fecharAviso;
    document.getElementById("fecharAvisoo").onclick = fecharAviso;
    return;
  }

  // PRODUTO MEIO A MEIO
  if (produtoSelecionado.nome.includes("Meio a meio")) {

    const botoesAtivos = document.querySelectorAll(
      "#opcoesTamanho button.ativo"
    );

    if (botoesAtivos.length < 2) return; // segurança

    let tamanhos = [];
    let total = 0;

    botoesAtivos.forEach(btn => {
      const index = Number(btn.dataset.index);
      const tamanho = produtoSelecionado.tamanhos[index];

      tamanhos.push(tamanho.nome);
      total += tamanho.preco;
    });

    carrinho.push({
      nome: produtoSelecionado.nome,
      tamanho: tamanhos.join(" + "),
      preco: total
    });

  } 
  // PRODUTO NORMAL
  else {
    if (!tamanhoSelecionado) return;

    carrinho.push({
      nome: produtoSelecionado.nome,
      tamanho: tamanhoSelecionado.nome,
      preco: tamanhoSelecionado.preco
    });
  }

  atualizarCarrinho();
  fecharModal(); 
});

function renderizarTamanhosBase() {
  const el = document.getElementById("opcoesTamanho");
  el.innerHTML = "";

  const tamanhos = produtos[0].tamanhos;

  tamanhos.forEach((t, i) => {
    const btn = document.createElement("button");
    btn.textContent = `${t.nome}`;
    if (i === 0) {
      btn.classList.add("ativo");
      tamanhoSelecionado = t;
    }

    btn.onclick = () => selecionarTamanho(t, btn);
    el.appendChild(btn);
  });
}


function removerProduto(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
function atualizarCarrinho() {
    
  listaCarrinhoEl.innerHTML = "";
  let subtotal = 0;

  carrinho.forEach((item, index) => {
    subtotal += item.preco;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} (${item.tamanho}) - R$ ${item.preco.toFixed(2)}
      <button onclick="removerProduto(${index})">❌</button>
    `;

    listaCarrinhoEl.appendChild(li);
  });
  
  const total = carrinho.length > 0 ? subtotal : 0;
  totalEl.innerText = total.toFixed(2);

 
  if (carrinho.length > 0) {
  const liTaxa = document.createElement("li");
  liTaxa.innerHTML = `<strong>Taxa de entrega</strong> - A COMBINAR NO WHATSAPP‼️⚠️`;
  listaCarrinhoEl.appendChild(liTaxa);
}

}

function calcularPrecoMeioAMeio() {
  if (saboresSelecionados.length < 2 || !tamanhoSelecionado) return;

  const preco1 = saboresSelecionados[0].tamanhos
    .find(t => t.nome === tamanhoSelecionado.nome).preco;

  const preco2 = saboresSelecionados[1].tamanhos
    .find(t => t.nome === tamanhoSelecionado.nome).preco;

  const precoFinal = (preco1 + preco2) / 2;

  modalPreco.textContent = precoFinal.toFixed(2);
}



// CARRINHO 

document.getElementById("toggleCarrinho").addEventListener("click", () => {
  carrinhoEl.classList.toggle("fechado");
});







function abrirCheckout() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  checkoutEl.style.display = "block";
  carrinhoEl.classList.add("fechado");
}

function enviarPedido() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const pagamento = document.getElementById("pagamento").value;

  if (!nome || !endereco || !pagamento) {
    alert("Preencha nome, endereço e forma de pagamento!");
    return;
  }

  let mensagem = ` *Pedido - D Gust Pizzaria*\n\n`;
  carrinho.forEach(item => {
  mensagem += `• ${item.nome} (${item.tamanho}) - *R$ ${item.preco.toFixed(2)}*\n`;
  });

  mensagem += `\n🚚 Taxa de entrega: *A COMBINAR NO WHATSAPP*`;
  mensagem += `\n💰 Total: *R$ ${totalEl.innerText}*`;
  mensagem += `\n\n Nome: ${nome}`;
  mensagem += `\n Endereço: ${endereco}`;
  mensagem += `\n Pagamento: ${pagamento}`;
  mensagem += `\n\n *Obrigado pelo pedido!*`;

  const telefone = "+5522981127370"; 
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}


 


// =======================
// INIT
// =======================
renderizarCardapio();


