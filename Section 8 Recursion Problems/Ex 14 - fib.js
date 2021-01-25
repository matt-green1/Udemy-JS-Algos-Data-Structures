// fib(4) // 3
// fib(6) // 8 
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584

function fib(num){
    if (num <= 2) return 1;
  
    return fib(num-1) + fib(num-2);

    // let nthNum = 0
    // if (num === nthNum) {
    //     return nthNum
    }

    /*
    fib(5) + fib(4)
    fib 4+fib 3 + // fib 3 + fib 2
    fib 3 + 1 + fib 1 + 1

    */