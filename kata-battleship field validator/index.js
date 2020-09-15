function validateBattlefield(field) {
  // write your magic here

  let numShips = [0, 4, 3, 2, 1]; // correct number of ships for each size

  // valid function check if a coordinate is inside of field
  // and is a valid ship point
  // 's' is a point that is already counted as ship so it shouldn't be counted again
  var valid = (row, col) =>
    row < 0 || col < 0 || row > 9 || col > 9 || field[row][col] === 's'
      ? 0
      : field[row][col];

  // using double loop to examine each point in 2D array
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (valid(i, j)) {
        //  check below only if the examined point has a '1'
        if (
          // check if contact other ship by corner
          valid(i - 1, j - 1) ||
          valid(i - 1, j + 1) ||
          valid(i + 1, j - 1) ||
          valid(i + 1, j + 1)
        )
          return false;
        if (
          // check contact other ship by side
          valid(i + 1, j) &&
          valid(i, j + 1)
        )
          return false;

        // now the field[i,j] is a valid ship point.
        // check horizontal and vertical
        if (valid(i + 1, j)) {
          let count = 0;
          while (valid(i + count, j)) {
            field[i + count][j] = 's'; // mark the point is already counted as ship
            count++;
            if (count >= 4) break;
          }
          numShips[count]--;
        } else if (valid(i, j + 1)) {
          let count = 0;
          while (valid(i, j + count)) {
            field[i][j + count] = 's';
            count++;
            if (count >= 4) break;
          }
          numShips[count]--;
        } else {
          // ship is size 1 - submarine
          numShips[1]--;
          field[i][j] = 's';
        }
      }
    }
  }

  // double loop is completed.
  // now need to check if there are appropriate number of ships for each size
  //if number of ship for every size is 0, return true.
  return numShips.every((num) => num === 0);
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);

// example solution from the site
//   function validateBattlefield(field) {
//     var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
//     for (var ships = [10,0,0,0,0], row = 0; row < 10; row++) {
//       for (var col = 0; col < 10; col++) {
//         if ( hit(row,col) ) {
//           if ( hit(row-1, col-1) || hit(row-1, col+1) ) return false; // Corner is touching
//           if ( hit(row-1, col  ) && hit(row  , col-1) ) return false; // Side is touching
//           if ( ( field[row][col] += hit(row-1, col) + hit(row, col-1) ) > 4 ) return false; // Ship is too long
//           ships[field[row][col]]++; ships[field[row][col] - 1]--;
//     } } }
//     return [0,4,3,2,1].every((s,i) => s == ships[i]);
//   }
