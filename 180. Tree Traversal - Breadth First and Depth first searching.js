class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        //node is where we start the search
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        //aka while there's something in the Queue (length not ==== 0) or it's truthy
        while(queue.length){
           //node defined at the top of scope - line 70
           // we lop it off the front and assign it to node variable
            node = queue.shift();

           // put the VALUE onto our data array
            data.push(node.value);
           
            //look at the node we lopped off and add it's left and right nodes if they exist
            if(node.left) queue.push(node.left);
           if(node.right) queue.push(node.right);
        }
        return data;
    }
    
    DFSPreOrder(){
        //this is just our final return order
        var data = [];
        //below is the recursive helper function
        function traverse(node){
            //push our root node value onto data list
            data.push(node.value);
            //progress down left side of branches until there are no left branches left
            if(node.left) traverse(node.left);
            
            //when done with left of a branch we do the right side
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            //FIRST we explore the left side
            // When we get to the bottom left we add node value
            if(node.left) traverse(node.left);

            //then we go all the way to bottom right and add node value
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();



