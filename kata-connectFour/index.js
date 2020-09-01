function whoIsWinner(piecesPositionList) {
  //return "Red", "Yellow" or "Draw"

  // initiallze 2 dimentional array for the board
  let board = new Array(7);
  for (let i = 0; i < 7; i++) board[i] = [];

  // process one input at a time by looping the List
  for (let i = 0; i < piecesPositionList.length; i++) {
    // get the column and color of the input
    let column = piecesPositionList[i].charAt(0);
    let color = piecesPositionList[i].substring(2);

    // put the disk in the board
    // xIndex is column, yIndex is vertical of the disk
    let xIndex = column.charCodeAt(0) - 65; //char of A is 65.
    board[xIndex].push(color);
    let yIndex = board[xIndex].length - 1;

    console.log('i = ' + i + '  col = ' + column + '  color = ' + color);

    // check if connect-four is achieved
    // checkFour return true is there is connect four
    if (checkFour(board, xIndex, yIndex, color)) return color;
  }

  // if there was no connect four, return Draw
  return 'Draw';
}

// below function look at each player's move
// and check if the move make a connect four
// return true if connect four is made
function checkFour(board, xIndex, yIndex, color) {
  //check horizontal four
  //start check where to start to check horizontal
  let start = xIndex > 3 ? xIndex - 3 : 0;
  let seq = 0;
  for (let i = start; i < 7; i++) {
    if (board[i][yIndex] === color) seq++;
    else seq = 0;
    if (seq === 4) return true;
  }

  //   //check vertical four
  // vertical only need to check if below 3 disks are all same color
  if (yIndex > 2) {
    if (
      board[xIndex][yIndex] === color &&
      board[xIndex][yIndex - 1] === color &&
      board[xIndex][yIndex - 2] === color &&
      board[xIndex][yIndex - 3] === color
    )
      return true;
  }

  // check diag - left down to right up
  // start set the begining point for horizontal index
  if (xIndex >= yIndex) start = xIndex - yIndex;
  else start = xIndex > 3 ? xIndex - 3 : 0;

  // yStart set the begining poit for column index
  let yStart = xIndex >= yIndex ? xIndex - start : yIndex - start;

  seq = 0;
  for (let i = start; i < 7; i++) {
    //  if (board[i][yIndex - yStart + i] == undefined) break;
    if (board[i][yIndex - yStart + i - start] === color) seq++;
    else seq = 0;

    if (seq === 4) return true;
  }

  // check diag - right down to left up

  start = xIndex > 3 ? start - 3 : 0;
  yStart = xIndex - start;

  seq = 0;
  for (let i = start; i < 7; i++) {
    if (board[i]) {
      if (board[i][yIndex + yStart - i] === color) seq++;
      else seq = 0;
      if (seq === 4) return true;
    }
  }
}
console.log(
  whoIsWinner([
    'A_Yellow',
    'E_Red',
    'A_Yellow',
    'B_Red',
    'A_Yellow',
    'B_Red',
    'A_Yellow',
    'G_Red',
    'C_Yellow',
    'C_Red',
    'D_Yellow',
    'F_Red',
    'E_Yellow',
    'A_Red',
    'A_Yellow',
    'G_Red',
    'A_Yellow',
    'F_Red',
    'F_Yellow',
    'D_Red',
    'B_Yellow',
    'E_Red',
    'D_Yellow',
    'A_Red',
    'G_Yellow',
    'D_Red',
    'D_Yellow',
    'C_Red',
  ])
);
//Yellow
