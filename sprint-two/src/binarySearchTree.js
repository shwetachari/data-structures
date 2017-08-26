var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.parent = null;
  tree.size = 1;
  tree.maxDepth = 1;
  tree.minDepth = 1;
  return tree;
};

var TreeNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var newNode = new TreeNode(value);
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
  var tree = this;
  var insertNode = function(node) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        newNode.parent = node;
        node.left = newNode;
        tree.size++;
      } else {
        insertNode(node.left);
      }
    } else if (newNode.value > node.value) {
      if (node.right === null) {
        newNode.parent = node;
        node.right = newNode;
        tree.size++;
      } else {
        insertNode(node.right);
      }
    }
  };
  insertNode(this);

  var checkDepth = function(addedNode, currentDepth) {
    if (addedNode.parent === null) {
      return currentDepth;
    } else {
      return checkDepth(addedNode.parent, currentDepth + 1);
    }
  };
  
  var currentMaxDepth = Math.max(checkDepth(newNode, 1), this.maxDepth);

  var checkMinDepth = function(rootNode, currentDepth) {
    // base case: when both .left and .right === null
    // recursive case: if .right === null
      // check .left
    // if .left === null
      // check .right
    // if .left && .right !== null
      //check .left and .right
    if (rootNode.left === null && rootNode.right === null) {
      return currentDepth;
    } else if (rootNode.value === tree.value && (rootNode.left === null || rootNode.right === null)) {
      return 1;
    } else {
      if (rootNode.right === null) {
        return checkMinDepth(rootNode.left, currentDepth + 1);
      } else if (rootNode.left === null) {
        return checkMinDepth(rootNode.right, currentDepth + 1);
      } else {
        return Math.min(checkMinDepth(rootNode.left, currentDepth + 1), checkMinDepth(rootNode.right, currentDepth + 1));
      }
    }
  };

  var currentMinDepth = checkMinDepth(this, 1);
  
  //check if maxDepth > 2minDepth
  //if true, start at newNode
    // do to its parent
      // check if child.value > grandparent.value
        // parent.right = child
        // parent.left = grandparent
      // if grandparent.value > child.value
        // parent.right = grandparent
        // parent.left = child
      // parent.parent = great grandparent (grandparent.parent)
    // do to its grandparent
      // grandparent.parent = parent
      // set both children to null
  var restructureTriplet = function(child) {
    var parent = child.parent;
    var grandparent = parent.parent;
    var less = function() {
      return [child, parent, grandparent].reduce(function(min, obj) {
        return obj.value < min.value ? obj : min;
      });
    }();
    var greater = function() {
      return [child, parent, grandparent].reduce(function(max, obj) {
        return obj.value > max.value ? obj : max;
      });
    }();
    var mid = function() {
      return [child, parent, grandparent].reduce(function(mid, obj) {
        return obj.value !== less.value && obj.value !== greater.value ? obj : mid;
      });
    }();
    // console.log('less: ' + less.value + ', mid: ' + mid.value + ', greater: ' + greater.value);
    // set mid properties
      // set mid.left = less
      // set mid.right = greater
      // set mid.parent = grandparent.parent
    // set less properties
      // set less.left and right = null
      // set less.parent = mid
    // set greater properties
      // set greater.left and right = null
      // set greater.parent = mid
    
    mid.left = less;
    mid.right = greater;
    mid.parent = grandparent.parent;

    if (mid.value < grandparent.parent.value) {
      grandparent.parent.left = mid;
    } else {
      grandparent.parent.right = mid;
    }

    less.left = null;
    less.right = null;
    less.parent = mid;

    greater.left = null;
    greater.right = null;
    greater.parent = mid;

    // console.log(tree);
  };

  if (currentMaxDepth > (2 * currentMinDepth) && this.size > 3) {
    // console.log('max depth: ' + currentMaxDepth + ', min depth: ' + currentMinDepth);
    restructureTriplet(newNode);
    this.maxDepth = Math.max(checkDepth(newNode, 1), this.maxDepth);
    this.minDepth = checkMinDepth(this, 1);
  } else {
    this.maxDepth = currentMaxDepth;
    this.minDepth = currentMinDepth;
  }

  
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
