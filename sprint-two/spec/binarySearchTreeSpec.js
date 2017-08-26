describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });
  
  it('should have a size property', function() {
    expect(binarySearchTree.size).to.be.a('number');
  });

  it('should adjust the size property after inserting nodes', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.size).to.equal(3);
  });

  it('should have a maxDepth property', function() {
    expect(binarySearchTree.maxDepth).to.be.a('number');
  });
  
  it('should adjust the maxDepth property when nodes are inserted', function() {
    expect(binarySearchTree.maxDepth).to.equal(1);
    binarySearchTree.insert(2);
    expect(binarySearchTree.maxDepth).to.equal(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.maxDepth).to.equal(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.maxDepth).to.equal(3);
  });

  it('should have a minDepth property', function() {
    expect(binarySearchTree.minDepth).to.be.a('number');
  });
  
  it('should adjust the minDepth property when nodes are inserted', function() {
    expect(binarySearchTree.minDepth).to.equal(1);
    binarySearchTree.insert(2);
    expect(binarySearchTree.minDepth).to.equal(1);
    binarySearchTree.insert(3);
    expect(binarySearchTree.minDepth).to.equal(1);
    binarySearchTree.insert(7);
    expect(binarySearchTree.minDepth).to.equal(2);
  });

  it('should restructure the tree if maxDepth is greater than twice the minDepth', function() {
    binarySearchTree.insert(3);
    expect(binarySearchTree.maxDepth).to.equal(2);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.maxDepth).to.equal(3);
  });

  it('should not add duplicate values in a tree', function() {
    binarySearchTree.insert(5);
    binarySearchTree.insert(5);
    expect(binarySearchTree.size).to.equal(1);
  });
});
