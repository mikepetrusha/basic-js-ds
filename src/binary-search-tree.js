const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.BinarySearchTree = null;
  }

  root() {
    return this.BinarySearchTree;
  }

  add(data) {
    const addNode = (data, node) => {
      if (!node) {
        return new Node(data);
      } else if (data < node.data) {
        node.left = addNode(data, node.left);
      } else if (data > node.data) {
        node.right = addNode(data, node.right);
      } else {
        return node
      }
      return node
    };
    this.BinarySearchTree = addNode(data, this.BinarySearchTree);
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let node = this.BinarySearchTree;
    while (node) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  remove(data, node = this.BinarySearchTree) {
    if (!this.has(data)) { return }
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.min(node.right);
        node.right = this.remove(node.data, node.right);
      }
    }
    return node;
  }

  min(node = this.BinarySearchTree) {
    if (!this.BinarySearchTree) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.BinarySearchTree) {
      return null;
    }

    let node = this.BinarySearchTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};