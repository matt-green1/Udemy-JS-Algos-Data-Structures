// still not perfect but just showing how to imrove our original basic hash:

// want to use a prime arrayLen too (aka the length of the array that we're converting to a hash)
function hash(key, arrayLen) {
    let total = 0;
    
    //prime numbers reduce collisions - many hashes use prime numbers
    let WEIRD_PRIME = 31;
    
    // taking the min solves the speed issue (we'll take the smaller number between length of array and 100)
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      
      //here we're having the two prime numbers interact which is important (BOTH the array length AND the 31 constant we defined above)
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }