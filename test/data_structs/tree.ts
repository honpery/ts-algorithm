import { expect } from 'chai';
import { Tree, TreeNode } from '../../src';

function BuildTree(key: number) {
	return new Tree(key);
}

describe('data struct: tree.', () => {
	it('insert', () => {
		const tree = BuildTree(10);
		tree.insert(tree.root, 2);
	});
})