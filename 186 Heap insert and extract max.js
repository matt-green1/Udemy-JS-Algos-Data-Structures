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



