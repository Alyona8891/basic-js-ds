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
    if (this.rootMy === null) {
      return null;
    } else {
      return this.rootMy;
    }
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    
    this.rootMy = addNode(this.rootMy, data);
  
    function addNode(node, data) {
      if(node === null) {
        return new Node(data);
      }
      if(node.data === data) {
       return node;
      }
      if(data < node.data) {
      node.left = addNode(node.left, data);
    } else {
      node.right = addNode(node.right, data);
    }
    return node;
  }
}

  has(data) {
    //throw new NotImplementedError('Not implemented');
    return searchNode(this.rootMy, data);

    function searchNode(node, data) {
      if(node === null) {
        return false;
      }
      if(node.data === data) {
        return true;
      }
      if(data > node.data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }

    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    return searchNode(this.rootMy, data);

    function searchNode(node, data) {
      if(node === null) {
        return null;
      }
      if(node.data === data) {
        return node;
      }
      if(data > node.data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    }
}

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    this.rootMy = removeNode(this.rootMy, data);

    function removeNode(node, data) {
      if(node === null) {
        return null;
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(node.left === null && node.right === null) {
          return null;
        }
        if(node.left === null) {
          node = node.right;
          return node;
        }
        if(node.right === null) {
          node = node.left;
          return node;
        }
        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);
        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    if (this.rootMy === null) {
      return;
    }
    let node = this.rootMy;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    if (this.rootMy === null) {
      return;
    }
    let node = this.rootMy;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
  
}

module.exports = {
  BinarySearchTree
};