## Etapas de instalação:
- Baixe o app com o comando: $ git clone https://github.com/mfabiodias/tictactoe.git;
- Instalar as dependências: $ npm install;
- Gerar os assets do aplicativo: $ npm run build;
- Editar e modificar arquivo .ENV, se necessário;
- Iniciar o aplicativo: $ npm start

## Sobre o APP

* Sistema foi desenvolvido com NodeJS e Express, com banco de dados SQLite e ReactJS.

* O banco de dados pode ser inicializado no terminal do servidor, a partir do diretório root com o comando: $ sqlite3 server/database/database.sqlite

* Ao realizar o procedimento de instalação o banco de dados é criado automaticamente, assim como a tabela e seus valores inciais. O SCHEMA pode ser visualizado em /server/database/schema.sql

## Funcionalidades

- 3 níveis de dificuldade, Fácil, Médio e Difícil;
- Seu adversário é a máquina;
- Quem inicia a partida é sempre o vencedor, em caso de empate o inicio é do usuário;
- Posibilidade de alternar os níveis de dificuldade;
- Contabilização das vitórias da máquina e do usuário;
- Possibilidade de reinicializar o contador de vitórias do jogo;

## Imagens do Jogo

[![Imagem inicial](https://photos.app.goo.gl/ysdCqPeBjk612uET6)](https://photos.app.goo.gl/ysdCqPeBjk612uET6)

[![Imagem vencedor](https://photos.app.goo.gl/UTmY8kdszwp78Drz8)](https://photos.app.goo.gl/UTmY8kdszwp78Drz8)





