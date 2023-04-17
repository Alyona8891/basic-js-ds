const { NotImplementedError, testOptional } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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
      return this.rootTree;
    } else {
      return null;
    }
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootTree = addEl(this.rootTree, data);
    function addEl(node, value) {
      if(!node) {
        return new Node(value);
      }
      if(node.value === value) {
        return node;
      }
      if(value < node.value) {
        node.left = addEl(node.left, value);
      } else {
        node.right = addEl(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    return searchEl(this.rootTree, data);
    function searchEl(node, value) {
    if(!node) {
      return false;
    } 
    if(node.value === value) {
      return true;
    }
    if(value < node.value) {
      return searchEl(node.left, value);
    } else {
      return searchEl(node.right, value);
    }
  }
  }

  find(data) {
    
    
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootTree = removeEl(this.rootTree, data);
    function removeEl(node, value) {
      if(!node) {
        return null;
      }
      if(value < node.value) {
        node.left = removeEl(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeEl(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;
        node.right = removeEl(node.right, minFromRight.value);
        return node;
      }
    }
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