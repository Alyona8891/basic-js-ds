const { NotImplementedError, testOptional } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   constructor() {
    this.rootMy = null;
  }

  root() {
    if (!this.rootMy) {
      return null;
    } else {
      return this.rootMy;
    }
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    ;
  }

  has(value) {
    //throw new NotImplementedError('Not implemented');
   
  }

  find(value) {
    //throw new NotImplementedError('Not implemented');
   
}

  remove(value) {
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