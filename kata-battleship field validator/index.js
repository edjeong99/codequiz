function validateBattlefield(field) {
    // write your magic here
    let newField = [10][10];
    let numShips = [0,4,3,2,1];
    
    var valid = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
    
    checkShip(x, y){
      
    }
    
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        if(valid(i,j)){  //  check below only if the board has a '1'
          if(valid(i-1,j-1) || valid(i-1,j+1) || valid(i+1,j-1) || valid(i+1,j+1))
            return false  // contact other ship by corner
          if(valid(i+1,j) && valid (i,j+1)) 
            return false  // contact other ship by side
          
          
        }
      }
    }
    
  }




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