

function binarySearch(arr,val){
    //set index values of beginning end and middle rounded down
    let leftPointer = 0
    let rightPointer = arr.length - 1
    let midPointer = Math.floor((leftPointer + rightPointer) / 2)
    //the while condition takes care of the situation where we hit the value right on
    // so we just need to account for if it's higher or lower

    //important the second condition after the && makes sure that if the value we're searching for
    // is not in the array we stop - other wise the left and right var's would converge on the same index
    while(arr[midPointer] !== val && leftPointer <= rightPointer) {
        if (val < arr[midPointer]) {
            rightPointer = midPointer - 1
        } else {
            leftPointer = midPointer + 1
        }
        midPointer = Math.floor((leftPointer + rightPointer) / 2)
        }
    // in the above while loop we're resetting EITHER the top or bottom AND resetting middle index based on new value then rerunning the while loop
        // so the midPointer is what eventually hits the value at some point

    // if we hit the value first try we'll skip the while loop and go straight to te if statement
    if (arr[midPointer] === val) {
        return midPointer
        } 
    // if we get to the end of teh while loop (or left pointer hits right pointer the second condition...)
    // we return -1 because we didn't find it
    return -1
    }
 /*
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}
 

alt solution with refactored code above:

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}


 */