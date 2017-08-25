var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.size = 0;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.size === 0) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    list.size++;
  };

  list.removeHead = function() {
    var removedHead = list.head;
    list.head = removedHead.next;
    list.size--;
    return removedHead.value;
  };

  list.contains = function(target) {
    var checkNext = function(node) {
      //base case: node.value === target
        //return true;
      //base case: node.next === null
        //return false
      //recursive case:
        //return checkNext(node.next);
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return checkNext(node.next);
      }
    };
    return checkNext(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addToTail = O(1)
  .removeHead = O(1)
  .contains = O(n)
 */
