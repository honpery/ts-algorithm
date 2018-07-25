/**
 * 树
 */

export class TreeNode<T> {
	key: number;
	left: TreeNode<T>;
	right: TreeNode<T>;

	constructor(key: number) {
		this.key = key;
	}
}


export class Tree<T> {
	root: TreeNode<T>;

	constructor(key: number) {
		this.root = new TreeNode(key);
	}

	/**
	 * 插入
	 * @param root
	 * @param key
	 * @param value
	 */
	insert(root: TreeNode<T>, key: number) {
		const node = new TreeNode(key);
		if (root.key < key) root.right = node;
		else root.left = node;
		return node;
	}

	/**
	 * 中序遍历
	 */
	inOrder(root: TreeNode<T>, cb: (node: TreeNode<T>) => void) {
		if (!root) return;
		this.inOrder(root.left, cb);
		cb(root);
		this.inOrder(root.right, cb);
	}

	/**
	 * 前序遍历
	 */
	preOrder(root: TreeNode<T>, cb: (node: TreeNode<T>) => void) {
		if (!root) return;
		cb(root);
		this.preOrder(root.left, cb);
		this.preOrder(root.right, cb);
	}

	/**
	 * 后序遍历
	 */
	postOrder(root: TreeNode<T>, cb: (node: TreeNode<T>) => void) {
		if (!root) return;
		this.postOrder(root.left, cb);
		this.postOrder(root.right, cb);
		cb(root);
	}

	/**
	 * 查找
	 */
	search(root: TreeNode<T>, key: number) {
		if (!root) return null;
		if (root.key === key) return root;
		if (root.key > key) return this.search(root.left, key);
		return this.search(root.right, key);
	}
}

let tree = new Tree(10);
tree.insert(tree.root, 2);
tree.insert(tree.root, 12);

tree.postOrder(tree.root, node => console.log(node.key));
console.log(tree.search(tree.root, 111));