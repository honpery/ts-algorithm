/**
 * 查找
 */
export class Search {

	/**
	 * 二分查找
	 * 查找：O(lgn)
	 * 插入：2n
	 */
	static binary(arr, elm) {
		let li = 0, hi = arr.length - 1;

		while (li <= hi) {
			const mi = ((hi - li) >> 1) + li;
			if (arr[mi] === elm) return mi;
			if (arr[mi] > elm) hi = mi - 1;
			else li = mi + 1;
		}

		return -1;
	}

	/**
	 * 二叉树：广度优先
	 */
	static bfs() {

	}

	/**
	 * 二叉树：深度优先
	 */
	static dfs() {

	}

}
