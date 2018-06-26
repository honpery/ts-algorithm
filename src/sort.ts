/**
 * 排序
 */
export class Sort {

	/**
	 * 插入排序 
	 * 时间复杂度：O(n^2)
	 */
	static insertion(arr = []) {
		if (arr.length < 2) return arr;

		for (let i = 1; i < arr.length; i++) {
			const current = arr[i];

			let j = i - 1;
			while (j >= 0 && arr[j] > current) {
				arr[j + 1] = arr[j];
				j--;
			}

			arr[j + 1] = current;
		}

		return arr;
	}

	/**
	 * 归并排序 
	 * 时间复杂度：O(nlgn)
	 */
	static merge(arr = []) {
		if (arr.length < 2) return arr;

		function _merge(left = [], right = []) {
			const result = [];

			while (left.length && right.length) {
				result.push(left[0] < right[0] ? left.shift() : right.shift());
			}

			return result.concat(left).concat(right);
		}

		const mid = arr.length >> 1;

		return _merge(Sort.merge(arr.slice(0, mid)), Sort.merge(arr.slice(mid)));
	}

	/**
	 * 冒泡排序 
	 * 时间复杂度：O(n^2)
	 */
	static bubble(arr = []) {
		if (arr.length < 2) return arr;

		for (let i = 0; i < arr.length; i++) {
			for (let j = arr.length - 1; j > i; j--) {
				if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			}
		}

		return arr;
	}

}
