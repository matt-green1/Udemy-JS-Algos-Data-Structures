// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// I want to multiply base by itself as long as exp is not = to 0 then reduce exp each time by one
// base case is when exp == 0

function power(base, exp){
    if (exp === 0){
        return 1
    }
    //console.log(base * power(base, exp - 1))
    return base * power(base, exp - 1)

}
/*
(2,3) should give you 8

first time through:
2 * (power(2,2))
        2 * power(2, 1)
                2 * power(2, 0)
                    1

*/