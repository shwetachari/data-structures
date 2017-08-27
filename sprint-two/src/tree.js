var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  newTree.children = [];  //can't point to null

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var checkChild = function(child) {
    //basecase: if child has no children, check if child.value is target --> return either true or false;
    if (child.children.length === 0) {
      return child.value === target;
    } else {
      if (child.value === target) {
        return true;
      }
      return child.children.reduce(function(bool, item) {
        return bool === true ? true : checkChild(item);
      }, false);
    }
  };
  return checkChild(this);
};

treeMethods.removeFromParent = function(value) {
  // function(tree)
    // base case: when our tree has no children (tree.children.length === 0)
      // return;
    // recursive case: when it has children
      // array: tree.children
      // splice object from array when we see a value that matches the one we're searching for
        // manually iterate (forEach?)
      // if our child has children (searched through all children, still haven't found target value)
        // then we want to search the children of the children --> function(tree.eachChild)
  var spliceFromChildren = function(tree) {
    if (tree.children.length === 0) {
      return;
    } else {
      tree.children.forEach(function(child, index) {
        if (child.value === value) {
          tree.children.splice(index, 1);
        } else {
          spliceFromChildren(child);
        }
      });
    }
  };

  spliceFromChildren(this);
  
};

//calling a callback function on all nodes in our tree
treeMethods.traverse = function(cb) {

  // cb(node.value)
  // if node has children, iterate over children of our input node
    // base case: when the input node doesn't have children
    // if child has children
      // call this recursive function on the child
  
  var traverseNodes = function(node) {
    if (node.value !== undefined) {
      cb(node.value);
    }
    if (node.children.length > 0) {
      node.children.forEach(function(child) {
        traverseNodes(child);
      });
    }
  };
  traverseNodes(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
  .addChild: O(1)
  .contains: O(n)
 */
