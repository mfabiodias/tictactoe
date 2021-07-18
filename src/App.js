import React, { useState, useEffect } from 'react';
import { getWinner, winCheck, getSugestion } from './helpers';
import './App.css';

function App() {

  const boardData = Array(9).fill("");
  const player = ["O", "X"];
  const robot = "X";
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState(player[Number(!player.indexOf(robot))]);
  const [winner, setWinner] = useState(null);
  const [level, setLevel] = useState("1");

  // Eventos dos jogadores
  const handleClick = (idx) => {
    // Vencedor ou Empate
    if(winner || board[idx] !== "") return null;

    // Desenha opção do jogador
    setBoard(board.map((e, i) => i === idx ? currentPlayer : e ));

    // Alternar a vez do jogador
    setCurrentPlayer(player[Number(!player.indexOf(currentPlayer))]);
  }

  // Mudar dificuldade do jogo
  const handleChange = (e) => {
    setLevel(e.target.value);
    resetGame();
  }

  // Lógica do adversário
  const autoGame = () => {
    const sugestion = getSugestion(board, level);
    handleClick(sugestion);
  }

  // Reiniciar partida
  const resetGame = () => {
    setCurrentPlayer(winner !== "E" && !!winner ? winner : player[Number(!player.indexOf(robot))]);
    setBoard(boardData);
    setWinner(null);
  }

  // Lógica do jogo
  const drawGame = () => {
    let winner = "";
    
    // Checar se existe um vencedor
    winCheck(board).forEach(cells => {
      if(cells.every(cell => cell === "X")) {
        winner = "X";
        setWinner(winner);
      } else if(cells.every(cell => cell === "O")) {
        winner = "O";
        setWinner(winner);
      }
    });
    
    // Verifica se existe um empate ou realiza jogada do robo
    if(!winner) {
      if(board.every(option => option !== "")) {
        setWinner("E");
      } else if(currentPlayer === robot) {
        autoGame();
      }
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(drawGame, [board, currentPlayer]);


  return (
    <>
      <header>
        <h1 className="title">Jogo da Velha</h1>
        <select className="custom-select" onChange={handleChange} defaultValue={level} >
          <option value="1">Fácil</option>
          <option value="2">Médio</option>
          <option value="3">Difícil</option>
        </select>
      </header>

      <main>
        <div className={`board ${winner ? "game-over" : ""}`} >
          {board.map((item,idx) => (
            <div key={idx} className={`cell ${item}`} onClick={() => handleClick(idx)}>
              {item}
            </div>
          ))}
        </div>
      </main>
      
      <footer>
        <h2 className="winner-message">
          <span className={!winner ? `player ${currentPlayer}` : winner }>
            {getWinner(winner, currentPlayer, robot)}
          </span>
        </h2>
        {winner && <button className="reset-button" onClick={resetGame}>Recomeçar o Jogo</button>}
      </footer>
    </>
  );
}

export default App;
