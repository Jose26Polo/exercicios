let rating = 'R';

switch(rating) {
  case 'peao':
    console.log("apenas para frente 1 casa.");
    break;
  case 'torre':
    console.log("linhas retas independente numero de casa.");
    break;
  case 'bispo':
    console.log("diagonal independente numero de casa");
    break;
  case 'cavalo':
    console.log("movimento em L sendo 1/3.");
    break;
  case 'rainha':
    console.log("linhas retas ou diagonal independente numero de casa");
    break;
  case 'rei':
    console.log("qualquer direcao 1 casa");
    break;
  default:
    console.log("peça não encontrada.");
}