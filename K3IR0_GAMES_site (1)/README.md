# K3IR0 GAMES

Site estático de portal de jogos para navegador.

## Como testar
Abra `index.html` no navegador.

## Como adicionar um jogo
1. Crie uma pasta dentro de `games/`, por exemplo `games/meu-jogo/`.
2. Coloque o `index.html` do jogo dentro dela.
3. Abra `games.js`.
4. Adicione um objeto no array `games`, por exemplo:

{
  id: "meu-jogo",
  title: "Meu Jogo",
  description: "Descrição curta.",
  category: "Terror",
  icon: "👻",
  badge: "NOVO",
  url: "games/meu-jogo/index.html"
}

Para usar uma capa, adicione:
cover: "assets/minha-capa.jpg"

## Publicar grátis
O projeto é estático e pode ser hospedado em serviços de hospedagem estática. Depois de publicar, qualquer jogo HTML5 incluído no projeto poderá abrir pela página do site, respeitando a licença/direitos do jogo.

## Importante
Não redistribua jogos comerciais ou arquivos que você não tenha autorização para hospedar.
