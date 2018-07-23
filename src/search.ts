/**
 * 查找
 */
export class Search {

	/**
	 * 二分查找
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

}
