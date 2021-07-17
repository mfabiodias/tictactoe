import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const boardData = Array(9).fill("");
  const player = ["O", "X"];
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState(player[0]);
  const [winner, setWinner] = useState(null);

  // Lógica do jogo
  const handleClick = (idx) => {
    // Vencedor ou empate
    if(winner || board[idx] !== "") return null;

    // Desenha opção do jogador
    setBoard(board.map((e, i) => i === idx ? currentPlayer : e ));

    // Alternar a vez do jogador
    setCurrentPlayer(player[Number(!player.indexOf(currentPlayer))]);
  }

  const resetGame = () => {
    setCurrentPlayer(winner !== "E" ? winner : "X");
    setBoard(boardData);
    setWinner(null);
  }

  const checkWinner = () => {
    const winPossible = [
      // Horizontal
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      // Vertical
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      // Transversal
      [board[2], board[4], board[6]],
      [board[0], board[4], board[8]],
    ];

    winPossible.forEach(cells => {
      if(cells.every(cell => cell === "X")) {
        console.log("X venceu"); 
        setWinner("X");
      } else if(cells.every(cell => cell === "O")) {
        console.log("O venceu"); 
        setWinner("O");
      } 
    });

    if(board.every(option => option !== "")) {
      setWinner("E");
    }
  }

  useEffect(checkWinner, [board]);


  return (
    <>
      <header>
        <h1 className="title">Jogo da Velha</h1>
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
            {!winner ? ` ${currentPlayer} é sua vez!!` : (winner !== "E" ? `${winner} venceu!` : `Empatou!`)} 
          </span>
        </h2>

        <button className="reset-button" onClick={resetGame}>Recomeçar o Jogo</button>
      </footer>
    </>
  );
}

export default App;
