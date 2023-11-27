require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require("express"); // Importa o módulo Express para o arquivo. O Express é um framework para Node.js que facilita a criação de aplicações web e APIs.

const app = express(); // Cria uma nova instância do Express. Esta instância 'app' será usada para configurar o servidor.

app.get("/", (req, res) => { // Define uma rota GET no caminho raiz ('/'). Quando uma requisição GET é feita para a raiz do site, a função callback é chamada.
  
  res.send("Hello, GastroTech!"); // A função callback envia uma resposta ao cliente. Neste caso, envia a string 'Hello, GastroTech!' como resposta.
});

const PORT = process.env.PORT || 3000; // Define a porta na qual o servidor irá escutar. Primeiro, tenta usar uma porta definida no ambiente (útil em ambientes de produção, como Heroku), se não estiver disponível, usa a porta 3000.

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`) // Inicia o servidor para escutar na porta definida. Quando o servidor começa a escutar, ele executa
); 
