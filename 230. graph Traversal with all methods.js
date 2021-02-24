class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        //keeps track of which vertices have been visited with a true/false valye
        const visited = {};
        
        //IMPORTANT - we define the adjacncy list here because
        //if we used "this.adjacencylist" inside recursive function the
        //context of the this keyword would change!!!! so we defin it here and then just refer to this variable
        const adjacencyList = this.adjacencyList;

        //outer recursive function - vertex is "start" above - function called right after it's called with start
        (function dfs(vertex){
            //if there's no vertex break out of recursive function
            if(!vertex) return null;
            // sets a new key in visited and sets to true
            visited[vertex] = true;
            // adds the start vertex to results array
            result.push(vertex);
            //for each vertext in the adjacncy list...
            adjacencyList[vertex].forEach(neighbor => {
                //if not true in visited object... (this stops us from counting an already counted neighbor)
                if(!visited[neighbor]){
                    //... then call the recursive helper function again on the next neighbor
                    return dfs(neighbor)
                }
            });
            //
        })(start);

        // returns the results at the end
        return result;
    }
    depthFirstIterative(start){
        //using an array as as stack (last in, first out)
        const stack = [start];
        
        //Create the same cariables that we do in recursive solution to keep track of stuff
        const result = [];
        const visited = {};
        
        //will eventually be set over and over to the popped off last value on our stack
        let currentVertex;

        //coudl alternatively be an array but this is "more explicit"
        visited[start] = true;
        
        //while stack is not empty...
        while(stack.length){
            
            //pop off last value (most recently added...)
            currentVertex = stack.pop();
            
            //push in popped off value ro results array
            result.push(currentVertex);

            // go through all neighbors of current vertex
            this.adjacencyList[currentVertex].forEach(neighbor => {
               
                //if its NEIGHBOR is not in visited object or is false...
                if(!visited[neighbor]){
                   //add it to the visited opject and set value to true
                    visited[neighbor] = true;
                   
                    //add its neigbor to the stack
                    stack.push(neighbor)
               } 
            });
        }
        return result;
    }


    breadthFirst(start){
        //simple que - array shifting off front
        const queue = [start];
        
        //create our result and visited + currentVertex variables to store stuff like in DFS
        const result = [];
        const visited = {};
        let currentVertex;
        
        //hit the start vertex first
        visited[start] = true;

        //while the queue isn't empty
        while(queue.length){
            
            //remove first item in queue and...
            currentVertex = queue.shift();
            //push it onto result array
            result.push(currentVertex);
           
            //go through each neighbor of start/current vertex
            this.adjacencyList[currentVertex].forEach(neighbor => {
                //if it's not true in the visited object...
                if(!visited[neighbor]){
                    //add to visited object
                    visited[neighbor] = true;
                    //and push the ngihbor's neighbor onto the queue
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]

