// fantasia, drama, aventura, musical, comédia, ação, ficção cientifica, esporte, familia

// como treinar seu dragão, LIVRE, aventura, fantasia
// karatê kid, 10, ação, drama, familia 
// o rei leão, LIVRE, drama, musical, aventura
// gente grande, 12, comédia
// la casa de papel, 16, ação 



let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(500, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("gray");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(1, 190, 1));
  textAlign(CENTER, CENTER);
  textSize(20);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Como treinar seu dragão";
    } else {
      if (idade >= 10 ) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Karate kid";          
        } else{
         return "Gente grande";
        }
      } else {
        if (gostaDeFantasia) {
          return "O rei leão";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "La casa de papel";
    } else {
      return "Como treinar seu dragão"
     }
   }
  }