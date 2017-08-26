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
    newNode.previous = list.tail;
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
  
  
  list.addToHead = function(value) {
    // newHead should point to prev head
    // remove head tag from prev head
    // make new node head
    // prev head points back to new node (previous)
    // list.size++;
    var newHead = Node(value);
    newHead.next = list.head;
    list.head.previous = newHead;
    list.head = newHead;
    list.size++;
  };

  list.removeTail = function() {
    // new tail should point to the previous one
    // remove the tail tag from node being deleted --> make new tail
    // point new tail to null
    // list.size--;
    // return value of removed node
    var removedValue = list.tail.value;
    list.tail = list.tail.previous;
    list.tail.next = null;
    list.size--;
    return removedValue;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.previous = null;
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  .addToTail = O(1)
  .removeHead = O(1)
  .contains = O(n)
  .addToHead = O(1)
  .removeTail = O(1)
 */
