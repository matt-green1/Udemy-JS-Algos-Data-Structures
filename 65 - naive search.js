function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           //for each index we add them together to move through the string
           // so for ex when we're on index 0  it's 0 + 1, 0 + 2, 0 + 3, on index 1 it's 1 + 1 , 1 + 2 (so we start at current index and then just add 1 easch time)
            if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")