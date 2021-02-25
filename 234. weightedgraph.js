class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    // this is the same from an unweighted graph
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // we now have to pass in weight as well
    addEdge(vertex1,vertex2, weight){
        // here we push in an object to vertex 1 - same as going push({node:vertex2, weight: weight}) - we simplify because the arguement is the same as the key name
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        //and then same for vertex 2 in reverse on the next line
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
}
