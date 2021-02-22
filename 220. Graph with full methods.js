//note - this will be an undirected graph!!!
class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    // just creates a key with an empty array as a value to add a vertex
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        //just pushed onto the vertices adjacny lsits - essentially connect them
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        
        //use filter to have the adjacency list only include values
        // that are NOT equal to vertex 2 (and the same below going the other way)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        
        //the while loop resolves to false when we've popped off all verteces from it - so .length will be 0 aka falsey
        // could alternatively do this with a for loop
        while(this.adjacencyList[vertex].length){
            //pops off the LAST vertex on the list of the vertex we
            // we want to remove ANd assigns it to a variable 
            const adjacentVertex = this.adjacencyList[vertex].pop();
            
            // then call removeEdge on the vertex we want to remove AND the last vertex on its adjacency list
            this.removeEdge(vertex, adjacentVertex);
        }
        //finally, we delete the key
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");






