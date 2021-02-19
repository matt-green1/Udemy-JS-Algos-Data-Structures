class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

    insert(element){
        //we start by adding new element onto end of array
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        //This line finds the last element in the array
        //We'll update this this variable as the element "bubbles up"  to record its new index
        let idx = this.values.length - 1;
        
        //this uses the above index to STORE the value of the last element itself (that we just added)
        const element = this.values[idx];
        //alt code to the above line: just have the helper method "bubble up" accept the element from outer function insert

        //this condition makes the bubbling up stop IF we get to the root
        while(idx > 0){
            //finds parent index using the formula for doing so from a child
            let parentIdx = Math.floor((idx - 1)/2);
            
            //stores parent value - not neccessary but a little cleaner - could alternatively just
            // compare what's on the right side of the equals sign
            let parent = this.values[parentIdx];
            
            // break out of while loop if the element is NOT bigger than parent
            //so it will stop bubbling where it is
            if(element <= parent) break;
            
            //assuming we DON'T break and we need to bubble...
            //we set the parent index to the value of the element
            this.values[parentIdx] = element;

            //we set the value of the added element to the formerly parent value 
            this.values[idx] = parent;
            
            //we set the indx up top to the formely parent index (completing the bubble up)
            idx = parentIdx;
            //testing testing 123
        }
    }

    extractMax(){
        // save root (first value in array) to a variable
        const max = this.values[0]

        // remove last element and save to variable (pop returns removed element)
        const end = this.values.pop()

        //this if statement makes sure the list isn't empty
        if(this.values.length > 0){
            //makes it the new root
            this.values[0] = end
            
            //long helper defined below
            this.sinkDown()
        }

        //at the end return the original root we removed
        return max
    }

        sinkDown(){
            let idx = 0
            const length = this.values.length
            
            //saving the NEW first element's value to a variable
            const element = this.values[0]

            while(true){
                //find a parent's child 1 and child 2 using the forumla below
                let leftChildIdx = 2 * idx + 1
                let rightChildIdx = 2 * idx + 2
                
                //keeps track of if there is a swap
                let swap = null

                //before we try to access the values of the children,
                // we need to make sure they exist (for ex a parent might only have one child or no children)
                let leftChild, rightChild

                //this if statement is what checks if there are children - since we'll stop if we try to access an index beyond hte length of the actual array
                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx]
                    if(leftChild > element){
                        swap = leftChildIdx
                    }
                //BUT now we need to also check right child, if it's bigger than left child it is actually the thing that gets swapped
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx]
                    
                    //tricky logic: first deal with case where first child wasn't swapped
                    // next deal with if left child WAS swapped, check if right child should actually be the swap if it's bigger
                    if(
                        (swap === null && rightChild > element) || 
                        
                        //QUESTION: how do we have access to leftCHild variable here???
                        //ANSWER - it's because we initialized it outside of the scope of the above if statement
                        (swap != null && rightChild > leftChild))
                        {
                            swap = rightChildIdx
                        }
                    }
                }

                //if there IS a swap, break out of the loop
                if(swap === null) break

                //idx is the index of the new root swap is index of the child we want to swap with the new root
                this.values[idx] = this.values[swap]
                
                //set the index of the thing we swapped to the value of the new root which we saved into element
                this.values[swap] = element

                //set the idx variable to where the swapped new root moved
                //we'll now continue looping and repeating the process so the bumped up Newroot will "sinkdown" 
                //until there's no longer a swap aka it's in the right place
                idx = swap
            }
        }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



