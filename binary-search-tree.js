class Node {
	constructor (val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor (root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert (val) {
		if (this.root === null) {
			this.root = new Node(val);
			return this;
		}
		let current = this.root;
		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = new Node(val);
					return this;
				} else {
					current = current.left;
				}
			} else if (val > current.val) {
				if (current.right === null) {
					current.right = new Node(val);
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively (val, currentNode = this.root) {
		if (!this.root) {
			let newNode = new Node(val);
			this.root = newNode;
			return this;
		}

		if (val < currentNode.val && !currentNode.left) {
			currentNode.left = new Node(val);
			return this;
		} else if (val < currentNode.val) {
			return this.insertRecursively(val, currentNode.left);
		}
		if (val > currentNode.val && !currentNode.right) {
			currentNode.right = new Node(val);
			return this;
		} else if (val > currentNode.val) {
			return this.insertRecursively(val, currentNode.right);
		}
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find (val) {
		if (!this.root) return undefined;

		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.val === val) return currentNode;
			if (currentNode.val > val) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively (val, currentNode = this.root) {
		if (!this.root) return undefined;

		if (val < currentNode.val) {
			if (currentNode.left === null) return undefined;
			return this.findRecursively(val, currentNode.left);
		} else if (val > currentNode.val) {
			if (currentNode.right === null) return undefined;
			return this.findRecursively(val, currentNode.right);
		}
		return currentNode;
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	dfsPreOrder () {
		let data = [];
		let current = this.root;

		function traverse (node) {
			data.push(node.val);
			node.left && traverse(node.left);
			node.right && traverse(node.right);
		}

		traverse(current);
		return data;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	dfsInOrder () {
		let data = [];
		let current = this.root;

		function traverse (node) {
			node.left && traverse(node.left);
			data.push(node.val);
			node.right && traverse(node.right);
		}

		traverse(current);
		return data;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	dfsPostOrder () {
		let data = [];
		let current = this.root;

		function traverse (node) {
			node.left && traverse(node.left);
			node.right && traverse(node.right);
			data.push(node.val);
		}

		traverse(current);
		return data;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs () {
		let queue = [ this.root ];
		let data = [];

		while (queue.length) {
			let current = queue.shift();
			data.push(current.val);
			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}
		return data;
	}
}

module.exports = BinarySearchTree;
