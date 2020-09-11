function permutations(str) {
  let result = [];

  // below is the recursive function to get all permutation
  function permutationRecursion(str, perm = '') {
    // base case - when str is empty
    if (!str.length) {
      // if string is empty, add the perm to the result
      if (!result.includes(perm)) result.push(perm); // if there is no duplicate in the result
    }
    // recursion for each char in the str
    else {
      for (let i = 0; i < str.length; i++) {
        // add the right char from string to perm
        // new string is original string minus the char
        let newStr = str.substring(0, i) + str.substring(i + 1, str.length);

        // call recursive function with shorter string and perm
        permutationRecursion(newStr, perm + str.charAt(i));
      }
    }
  }

  permutationRecursion(str);
  return result;
}

console.log(permutations('aabb'));
