function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  // first time through we call quicksort on the whole array
  function quickSort(arr, left = 0, right = arr.length -1){
    //this resolves to false when we converge on one number (left and right converge eventually like binary sort)  
    if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  quickSort([100,-3,2,4,6,9,1,2,5,3,23])
  
  
  
  
  // [4,6,9,1,2,5,3]
  // [3,2,1,4,6,9,5]
  //        4
  //  3,2,1    6,9,5
  //      3      6
  //  2,1      5  9
  //    2
  //  1
  
//  =================================

// pivot notes below

// // First Version
// function pivot(arr, start=0, end=arr.length+1){
  
//     // this is just the swap functionality
//     function swap(array, i, j) {
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }
  
//     //sets the pivot point to the beginning
//     var pivot = arr[start];
    
//     // sets a "swap index" variable which will end up being where we put the pivot
//     //gets incremented by 1 every time 
//     var swapIdx = start;
  
//     for(var i = start + 1; i < arr.length; i++){
      
//       //if first value aka pivot is greater than the element at that position, then  add 1 to swap index AND swap the current element with the last unsorted element (swap index)
//       // aka we'll have to bump the pivot to index "swap index" that is getting incremented every timt there's something smaller than pivot
      
//       if(pivot > arr[i]){
//         swapIdx++;
//         // this works because we're incrementing start index every time - so we know what the egde of the lower numbers is
//         swap(arr,swapIdx,i);
//       }
//     }
//     swap(arr,start,swapIdx);
//     return swapIdx;
//   }
  
//   // Version with ES2015 Syntax
//   function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
  
//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;
  
//     for (let i = start + 1; i <= end; i++) {
//       if (pivot > arr[i]) {
//         swapIdx++;
//         swap(arr, swapIdx, i);
//       }
//     }
  
//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
//   }
  
//   pivot([4,8,2,1,5,7,6,3])
  
  
  