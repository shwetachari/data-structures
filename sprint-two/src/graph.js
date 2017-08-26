

// Instantiate a new graph
var Graph = function() {
};

//tests are created a var Graph = new Graph(); --> {edges : [{value : val, edges = []}, {value : val, edges = []}, ....]}
// var Graph = new Graph --> "new" automatically binds object being created to keyword "this" inside of the Class function;
// Graph.addNode(value) --> this: Graph object

// Add a node to the graph, passing in the node's value
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // node is a value
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // every time we add an edge from one node to another, we also add an edge from that node back
  // every value that points to this node (parameter) exists within its "edges" array
  // we have to find those nodes, then delete this node (parameter) from their arrays

  // Step 1: Iterate over all of the soon to be deleted node's connections/edges
  // Step 2: Iterate over the connections arrays and delete the parameter node
  // array.indexOf(target)
  var graph = this;
  this[node].forEach(function(edge) {
    var edgeIndex = graph[edge].indexOf(node);
    graph[edge].splice(edgeIndex, 1);
  });
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.hasOwnProperty(fromNode) && this.hasOwnProperty(toNode)) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var graph = this;
  var removeEdgeBetween = function(start, target) {
    //purpose of this function is to go into the array at the start property in our graph
    // search for the target
    // delete the target
    graph[start].forEach(function(item, index) {
      //if item is the target then delete it
      if (item === target) {
        graph[start].splice(index, 1);
      }
    });
  };
  removeEdgeBetween(fromNode, toNode);
  removeEdgeBetween(toNode, fromNode);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // calling callback on every node value in the graph
  // Number(string);
  Object.keys(this).forEach(function(value) {
    var stringToNumber = Number(value);
    cb(stringToNumber);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addNode: O(1)
  .contains: O(1)
  .removeNode: Best Case: O(1) (if no edges), Ave Case: O(n), Worst case: O(n^2)
  .hasEdge: Worst Case: O(n)
  .addEdge: O(1)
  .removeEdge: O(n)
  .forEachNode: O(n)
 */


