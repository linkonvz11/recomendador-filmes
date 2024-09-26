// fantasia, drama, aventura, musical, comédia, ação, ficção cientifica, esporte, familia

// como treinar seu dragão, LIVRE, aventura, fantasia
// karatê kid, 10, ação, drama, familia 
// o rei leão, LIVRE, drama, musical, aventura
// gente grande, 12, comédia
// la casa de papel, 16, ação 



let campoIdade;
let campoFantasia;
let campoAventura;
let campoDrama;
let campoAção;
let campoComédia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("0");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoFantasia = createCheckbox("Gosta de comédia?");
  campoAventura = createCheckbox("Gosta de drama?");
  campoAventura = createCheckbox("Gosta de ação?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeAção = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostadeDrama, gostaDeAção, gostaDeComédia);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
