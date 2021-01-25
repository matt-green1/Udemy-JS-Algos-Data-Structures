//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
    if (x < 0 ) return 0;
    // need above line because you'll exceed call stack if we go negative because we'll never hit 0
   
    if (num === 0) {
       return 1
   }

   return num * factorial(num -1)
}

/*
factorial(3)

3 * factorial (2)
        2 * (factorial 1)
                1 (factorial(0)
                        1

*/
