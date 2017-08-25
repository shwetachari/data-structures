var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];  //can't point to null

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  var child = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
  .addChild: O(1)
  .contains: O(n)
 */
