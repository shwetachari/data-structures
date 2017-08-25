

// Instantiate a new graph
var Graph = function() {
  this.edges = [];
};

//tests are created a var Graph = new Graph(); --> {edges : [{value : val, edges = []}, {value : val, edges = []}, ....]}
// var Graph = new Graph --> "new" automatically binds object being created to keyword "this" inside of the Class function;
// Graph.addNode(value) --> this: Graph object

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph();
  newNode.value = node;

  this.edges.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { // node is a value
  
  var checkNode = function(edge) { // edge is an object
    //base case 1: edge.value === node
    //the base case: edge.edges.length === 0
    //recursive case: edge.edges.length > 0
      //call checkNode on each item in edge.edges
    if (edge.value === node) {
      return true;
    } else if (edge.edges.length === 0) {
      return false;
    } else {
      return edge.edges.reduce(function(bool, item) {
        return bool === true ? true : checkNode(item);
      }, false);
    }
  }; 
 
  return checkNode(this);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  var findAndRemove = function(edge, parent, index) {
    // base case: edge.value === node
      // parent.edges.splice(index, 1);
      // return
    // recursive case: edge.edges.length > 0;
    if (edge.value === node) {
      parent.edges.splice(index, 1);
      return;
    } else if (edge.edges.length > 0) {
      edge.edges.forEach(function(item, i) {
        findAndRemove(item, edge, i);
      });
    }
  };

  findAndRemove(this);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //1. find our fromNode --> store in variable
  //2. check if there is some path between fromNode and toNode
    // check if we can follow enough nested arrays to reach toNode
  var fromNodeObj;
  var findFromNode = function(edge) {
    // base case: if edge.value === fromNode
      // return edge
    // recursive case: if edge.edges.length > 0
      //for each item in edge.edges
        // call findFromNode(edge)
    if (edge.value === fromNode) {
      fromNodeObj = edge;
      return;
    } else if (edge.edges.length > 0) {
      edge.edges.forEach(function(item) {
        findFromNode(item);
      });
    }
  };
  
  findFromNode(this);
  
  var checkPathToNode = function(edge) {
    if (edge.value === toNode) {
      return true;
    } else if (edge.edges.length === 0) {
      return false;
    } else {
      return edge.edges.reduce(function(bool, item) {
        return bool === true ? true : checkNode(item);
      }, false);
    }
  };
  
  return checkPathToNode(fromNodeObj);

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?

  .removeNode: O(n^2)
 */


