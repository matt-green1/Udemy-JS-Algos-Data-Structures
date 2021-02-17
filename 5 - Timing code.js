//add1 - big O: O(n) --> the bigger n is, the more times we need to lop through something, so it takes longer the bigger n is

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n ; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))


//add2 - big O: O(1) --> no matter what n is, there are the same amount of operations - it doesn't take mroe time when n increases

function addUpTo(n) {
    return n * (n+1) / 2;
}

console.log(addUpTo(6))

//add1_Timing

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n ; i++) {
        total += i;
    }
    return total;
}

var t1 = performance.now();
addUpTo(1000000000)
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)


//add2_Timing (much faster than add1)

function addUpTo(n) {
    return n * (n+1) / 2;
}

var t1 = performance.now();
addUpTo(1000000000)
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)
