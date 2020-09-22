var validTicTacToe = function (board) {
  let length = board.length;
  if (length > 3) return false; // check if input is valid

  let numOfX = 0, // number of X mark
    numOfO = 0, // number of O mark
    winMark = ''; // character of winning (X or O) will be added
  // there can be a case when an character add 2 wins at once.
  // thus, need to know the character of win

  for (let i = 0; i < 3; i++) {
    // check if there is win in horizontal and vertical

    if (
      board[i][0] !== ' ' &&
      board[i][1] === board[i][2] &&
      board[i][1] == board[i][0]
    )
      winMark += board[i][0]; // add character of win
    if (
      board[0][i] !== ' ' &&
      board[1][i] === board[2][i] &&
      board[1][i] == board[0][i]
    )
      winMark += board[0][i];

    // count X or O character in the board
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') numOfX++;
      else if (board[i][j] === 'O') numOfO++;
    }
  }

  // check diagonal win
  if (
    board[0][0] !== ' ' &&
    board[0][0] === board[1][1] &&
    board[1][1] == board[2][2]
  )
    winMark += board[0][0];
  if (
    board[2][0] !== ' ' &&
    board[2][0] === board[1][1] &&
    board[1][1] == board[0][2]
  )
    winMark += board[2][0];

  // console.log(numOfX, numOfO, winMark);

  // now counting is completed.  Check cases for board is false
  // if board pass all test, it must be true

  // check if there are too many X or O
  if (numOfO > numOfX || numOfX - numOfO > 1) return false;

  if (winMark.length > 1) {
    // if there is more than 1 wins
    if (winMark.length > 2) return false; // if more than 2 wins
    if (winMark[0] !== winMark[1]) return false; // if there are 2 wins, the character of win must be same
  } else if (winMark.length === 1) {
    // if 1 win, number of X/O must be appropriate num
    if (winMark === 'X' && numOfX - numOfO !== 1) return false;
    if (winMark === 'O' && numOfX - numOfO !== 0) return false;
  }

  return true;
};

console.log(validTicTacToe(['XOX', 'O O', 'XOX']));
