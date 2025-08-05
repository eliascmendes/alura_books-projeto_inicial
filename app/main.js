let livros = []
const endpointDaApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
getBuscarLivrosDaApi()

// funcao assincrona
async function getBuscarLivrosDaApi() {
  const res = await fetch(endpointDaApi)
  livros = await res.json()
  let livrosComDesconto = aplicarDesconto(livros)
  console.table(livros)
  exibirOsLivrosNaTela(livrosComDesconto)
}
