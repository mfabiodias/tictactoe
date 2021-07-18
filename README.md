## Etapas de instalação:
- Baixe o app com o comando: $ git clone https://github.com/mfabiodias/tictactoe.git
- Instalar as dependências: $ cd tictactoe && npm install
- Gerar os assets do aplicativo: $ npm run build
- Editar e modificar arquivo .ENV, se necessário
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

[![Imagem inicial](https://lh3.googleusercontent.com/pw/AM-JKLWIqrVDsR4FMr2VLaVMzupie417b4boEviEx0et9xKpd4SxHbCoXtOK1LpD5P1YtQED2g-abtr1qlY4UJBdl8SAetUYH7hbT1PMCB9p1XkOZnVFGkUHsYjjl71EyPv-RiDZhQK-GxDaDnZYowtvtG8=w506-h578-no?authuser=0)](https://lh3.googleusercontent.com/pw/AM-JKLWIqrVDsR4FMr2VLaVMzupie417b4boEviEx0et9xKpd4SxHbCoXtOK1LpD5P1YtQED2g-abtr1qlY4UJBdl8SAetUYH7hbT1PMCB9p1XkOZnVFGkUHsYjjl71EyPv-RiDZhQK-GxDaDnZYowtvtG8=w506-h578-no?authuser=0)

[![Imagem vencedor](https://lh3.googleusercontent.com/pw/AM-JKLVWhzi4aaFF4r65XzEOuWdVXoUETvYK-0PyhP0SgztAN1Q_3O0TRd3RE0zA43C9HeCfPmx35vmg1wu9Xeev2tFH3DWSHH_3-SLR1G73SR_Dp9cA6_4n85xNpZyMtBhTxtMX0-_7M5--OvntDGkfN-s=w478-h616-no?authuser=0)](https://lh3.googleusercontent.com/pw/AM-JKLVWhzi4aaFF4r65XzEOuWdVXoUETvYK-0PyhP0SgztAN1Q_3O0TRd3RE0zA43C9HeCfPmx35vmg1wu9Xeev2tFH3DWSHH_3-SLR1G73SR_Dp9cA6_4n85xNpZyMtBhTxtMX0-_7M5--OvntDGkfN-s=w478-h616-no?authuser=0)