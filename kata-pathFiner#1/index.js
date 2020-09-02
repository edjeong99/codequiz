function pathFinder(maze) {
  let board = [];

  for (let line of maze.split('\n')) {
    //   console.log(line);
    board.push([...line]);
  }
  // console.log(board);

  let size = board.length;
  let end = size - 1;

  // toVisit stores points in the board where
  // next to move will be considered.
  // from this point, N/W/S/E will be considered.
  // if considered point is not wall, out of bound, already visited,
  // the point will be added to the toVisit.
  // toVisit is a Set to exclude any redundancy
  let toVisit = new Set();
  toVisit.add([0, 0]);

  // while loop while toVisit has any point
  // if end is reached, return true in the loop
  // if there is no point in the toVisit, return false
  // since there is no path for an end.
  while (toVisit.size > 0) {
    let pos = toVisit.values().next().value;
    toVisit.delete(pos);
    console.log(pos);
    let [x, y] = pos;
    board[x][y] = '*'; // mark as visited;
    for ([x, y] of [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ]) {
      if (end === x && end === y) return true;
      if (x < 0 || y < 0 || x >= size || y >= size) continue;
      if (board[x][y] !== '*' && board[x][y] !== 'W') toVisit.add([x, y]);
    }
  }
  return false;
}

console.log(
  pathFinder(
    `......
    ......
    ......
    ......
    .....W
    ....W.`
  )
);
