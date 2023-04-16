const { NotImplementedError, testOptional } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    if (this.rootTree !== null) {
      return this.rootTree();
    } else {
      return null;
    }
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    
  }
}

module.exports = {
  BinarySearchTree
};