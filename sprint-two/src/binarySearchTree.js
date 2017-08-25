var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newNode = new BinarySearchTree(value);
    //function(node) i.e. root
    //base case: if the newNode.value is < node.value and node.left is equal to null
      //set node.left.value equal to newNode
    //base case 2: if the newNode.value is greater than node.Value and node.right equals null
      //set node.right.value = newNode
    //recursive case 1: if newNode.value is less than node.value and node.left is not equal to null
      //call function(node.left) 
    //recursive case 2: if newNode.value is less than node.value and node.right is not equal to null
      //call function(node.right)
  //return function(this)
  var insertNode = function(node) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right);
      }
    }
  };
  insertNode(this);
};

binaryTreeMethods.contains = function(value) {
  // base case 0: is this our value (is value === node.value)
    // return true;
//if value < node.value
  // base case 1: if the value is < node.value and node.left is equal to null
    // return false
  //recursive case 1: if value is less than node.value and node.left is not equal to null
    // call function(node.left)
//if value > node.value
  // base case 2: if the value > node.value and node.right equals null
    // return false
  //recursive case 2: if value is less than node.value and node.right is not equal to null
    //call function(node.right)

  var containsNode = function(node) {
    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      if (node.left === null) {
        return false;
      } else {
        return containsNode(node.left);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        return false;
      } else {
        return containsNode(node.right);
      }
    }
  };
  
  return containsNode(this);

};

binaryTreeMethods.depthFirstLog = function(cb) {
  // performs a callback function on all nodes in tree
  // recursive function(node)
    //cb(node.value)
    //base case: if there are no children (node.left and node.right equal null)
    //node.left is null
      //call recursive function on node.right
    //node.right is null
      //call recursive function on node.left
    //if neither are null (else)

  var transformTree = function(node) {
    cb(node.value);
    if (node.left === null && node.right === null) {
      return;
    } else if (node.left === null) {
      transformTree(node.right);
    } else if (node.right === null) {
      transformTree(node.left);
    } else {
      transformTree(node.right);
      transformTree(node.left);
    }
  };

  transformTree(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
  .insert: O(log n)
  .contains: O(log n)
  .depthFirstLog: O(n)
 */
