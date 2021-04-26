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
		if (!this.root) {
			let newNode = new Node(val);
			this.root = newNode;
			return this;
		}
		let currentNode = this.root;
		if (val < currentNode.val && currentNode.left) {
			currentNode = currentNode.left;
		} else if (val < currentNode.val) {
			currentNode.left = new Node(val);
			return currentNode;
		}
		if (val > currentNode.val && currentNode.right) {
			currentNode = currentNode.right;
		} else if (val > currentNode.val) {
			currentNode.right = new Node(val);
			return currentNode;
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

	// findRecursively (val) {}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	// dfsPreOrder () {}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	// dfsInOrder () {}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	// dfsPostOrder () {}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	// bfs () {}

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	// remove (val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	// isBalanced () {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	// findSecondHighest () {}
}

module.exports = BinarySearchTree;

// let binarySearchTree = new BinarySearchTree();
// // console.log(binarySearchTree);

// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// // console.log(binarySearchTree.root.val); // 15
// // console.log(binarySearchTree.root.right.value); // 20
// // console.log(binarySearchTree.root.left.right.value); // 12

// console.log(binarySearchTree.find(10));
