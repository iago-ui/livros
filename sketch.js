let livros = [
 { nome: "shrek", idade: 0, categorias: ["fantasia", "aventura"] },
 { nome: "coraline e o mundo secreto", idade: 15, categorias: ["fantasia", "aventura"] },
 { nome: "o magico de oz", idade: 10, categorias: ["drama", "fantasia", 
"aventura"] },
 { nome: "Guardiões da Galáxia", idade: 12, categorias: ["fantasia", "aventura"] },
 { nome: "foi apenas um sonho", idade: 12, categorias: ["drama"] },
 { nome: "algum lugar especial", idade: 14, categorias: ["drama"] }
];
let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let livrosRecomendados = [];
function setup() {
 createCanvas(600, 400);
 background(240);
 textSize(16);
 fill(50);
 text("Recomendador de livros", 20, 30);
 // Coletar idade
 idadeUsuario = int(prompt("Qual sua idade?"));
 // Coletar preferências
 gostaFantasia = prompt("Você gosta de livros de fantasia? (sim/não)").toLowerCase() === "sim";
 gostaAventura = prompt("Você gosta de livros de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de livros de drama? (sim/não)").toLowerCase() === "sim";
 for (let livro of livros) {
 if (idadeUsuario >= livros.idade) {
 if (
 (gostaFantasia && livro.categorias.includes("fantasia")) ||
 (gostaAventura && livro.categorias.includes("aventura")) ||
 (gostaDrama && livro.categorias.includes("drama"))
 ) {
 livrosRecomendados.push(livro.nome);
 }
 }
 }
  if (livrosRecomendados.length > 0) {
 text("livros recomendados para você:", 20, 70);
 for (let i = 0; i < livrosRecomendados.length; i++) {
 text("- " + livrosRecomendados[i], 40, 100 + i * 25);
 }
 } else {
 text("Nenhum livros disponível para sua idade e preferências.", 20, 70);
 }
}
