class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //NOTE: here we've basically renamed shift and unshift from a SLL to push and pop (aka we're going from the beginning since that's more efficient for SLLs)
    // If it were a DLL we could use push/pop OR shift/unshift
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
            //I added this below
            //this.first = null;
        }
        //this line also somehow sets this.first to null -it's because a node by default has no next it starts with .next = null
        //so if it's the only node, we set first to null if there are
        // more than one node, we set the next to the actual next node
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}