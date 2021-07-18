export const getWinner = (winner, currentPlayer, robo) => {
    if(!winner) {
        return currentPlayer === robo ? "É a vez da máquina!" : "É a sua vez!";
    } else {
        return winner !== "E" ? `${winner === robo ? "Máquina" : "Você" } venceu!` : `Empatou!`;
    }
} 

export const winCheck = (board) => [
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

export const getSugestion = (board, level) => {
    const machine = [];
    const human   = [];
    const options = [];

    const machineNextOptions = { "1": [], "2": [], "3": [] };
    const humanNextOptions   = { "1": [], "2": [], "3": [] };

    const winModel = [
        [0,1,2], [3,4,5], [6,7,8], // Horizontal
        [0,3,6], [1,4,7], [2,5,8], // Vertical
        [2,4,6], [0,4,8] // Transversal
    ];

    board.forEach((v,i) => {
        if(v === 'O') human.push(i)
        else if(v === 'X') machine.push(i)
        else if(v === '') options.push(i)
    });

    // Máquina
    let machineOptions = winModel.filter((machineOption, i) => {
      return !(machineOption.filter(x => human.includes(x))).length
    });

    machineOptions = machineOptions.map((winOption,i) => {
        return winOption.filter(x => options.includes(x));
    });

    machineOptions.forEach(options => {
      if(!!options.length) machineNextOptions[options.length].push(options)
    });

    // Humano
    let humanOptions = winModel.filter((humanOption, i) => {
      return !(humanOption.filter(x => machine.includes(x))).length
    });

    humanOptions = humanOptions.map((winOption,i) => {
        return winOption.filter(x => options.includes(x));
    });

    humanOptions.forEach(options => {
      if(!!options.length) humanNextOptions[options.length].push(options);
    });

    if(!!humanNextOptions[1].length) machineNextOptions[1] = humanNextOptions[1];

    console.log(`Level ${level} ativo!`)

    let sugestion;
    if(parseInt(level) === 1) {
      sugestion = options;
    } else if(parseInt(level) === 2) {
      sugestion = 
        !!machineNextOptions[1].length ? machineNextOptions[1].flat(1) : 
        !!machineNextOptions[2].length ? machineNextOptions[2].flat(1) : 
        !!machineNextOptions[3].length ? machineNextOptions[3].flat(1) : options;
    } else {
      sugestion = 
        !machine.includes(4) && !human.includes(4) ? [4] :
        !!machineNextOptions[1].length ? machineNextOptions[1].flat(1) : 
        !!machineNextOptions[2].length ? machineNextOptions[2].flat(1) : 
        !!machineNextOptions[3].length ? machineNextOptions[3].flat(1) : options;
    }

    sugestion = sugestion[Math.floor(Math.random()*sugestion.length)]; 

    return sugestion;
}