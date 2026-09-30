/*
  COMO ADICIONAR JOGOS:
  1. Coloque a pasta/arquivo do jogo dentro de /games/
  2. Adicione um objeto abaixo.
  3. "url" deve apontar para o arquivo/pasta que inicia o jogo.
  Exemplos:
    url: "games/meu-jogo/index.html"
    url: "games/meu-jogo.html"
*/
const games = [
  {
    id: "demo",
    title: "Jogo de Exemplo",
    description: "Substitua este cartão pelo seu primeiro jogo.",
    category: "Demonstração",
    icon: "🎮",
    badge: "EXEMPLO",
    url: "games/demo.html"
  }
];