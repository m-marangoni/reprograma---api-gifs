const btnBusca = document.getElementById("btn-busca");
btnBusca.addEventListener("click", trazResultadoDaBusca);
let listaGifs = [];

function buscaPalavra(){
  return document.getElementById("campo-busca").value;
}

function erro(){
  console.log("erro");
}

function trazResultadoDaBusca(event){
  event.preventDefault();
const respostaBusca = new XMLHttpRequest();
respostaBusca.open("GET", `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaPalavra()}&api-key=0f8b883df781451390110137a2fd9e96`);
respostaBusca.onload = carregaPosts;
respostaBusca.onerror = erro;
respostaBusca.send();
}

function carregaPosts(){
  docs = JSON.parse(this.responseText)["response"]["docs"];
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById("exibe-busca");
    exibeBusca.innerHTML = 
      `<div class="area-noticia"> ${docs.map(doc => `
        <div class="noticia">
          <h3>${doc.headline.main}</h3>
          
        </div>
        `).join("")}
      </div>`;
}
   


