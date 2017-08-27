describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have expected parent property for tree and nested children', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(5);
    expect(tree.children[0].parent === null).to.equal(false);
  });

  it('should have a method named "removeFromParent"', function() {
    expect(tree.removeFromParent).to.be.a('function');
  });

  it('should remove parent and children references when removeFromParent is called', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    expect(tree.contains(8)).to.equal(true);
    tree.removeFromParent(8);
    expect(tree.contains(8)).to.equal(false);
  });

  it('should have a method named "traverse"', function() {
    expect(tree.traverse).to.be.a('function');
  });

  it('should perform a callback on all values in the tree when traverse is called', function() {
    var leafArray = [];    
    var pushToArray = function(val) {
      leafArray.push(val);
    };
    var expectedLeafArray = [5, 7, 6, 8, 9];
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.children[1].addChild(9);
    tree.traverse(pushToArray);
    expect(leafArray).to.eql(expectedLeafArray);
  });

});
