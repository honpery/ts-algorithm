/**
 * 最大子数组
 * 时间复杂度：O(nlgn)
 */
export function MaxSubarray(arr = [], low = 0, high = arr.length - 1): { low: number, high: number, sum: number } {
	if (low === high) return arr[low];

	/**
	 * 跨中点最大子数组
	 * 时间复杂度：O(n)
	 * @param arr 
	 * @param start 
	 * @param mid 
	 * @param end 
	 */
	function maxCrossing(arr: number[], low: number, mid: number, high: number) {
		if (low === high) return { low, high, sum: arr[low] };

		let sum = 0;
		let left = mid, leftSum = arr[left];
		let right = mid + 1, rightSum = arr[right];

		for (let i = left; i >= low; i--) {
			sum += arr[i];
			if (leftSum < sum) {
				leftSum = sum;
				left = i;
			}
		}

		sum = 0;

		for (let i = right; i <= high; i++) {
			sum += arr[i];
			if (rightSum < sum) {
				rightSum = sum;
				right = i;
			}
		}

		return { low: left, high: right, sum: leftSum + rightSum };
	}

	const mid = Math.floor((low + high) / 2);

	const onlyLeft = MaxSubarray(arr, low, mid);
	const onlyRight = MaxSubarray(arr, mid + 1, high);
	const cross = maxCrossing(arr, low, mid, high);

	if (onlyLeft.sum >= onlyRight.sum && onlyLeft.sum >= cross.sum) return onlyLeft;
	if (onlyRight.sum >= onlyLeft.sum && onlyRight.sum >= cross.sum) return onlyLeft;
	return cross;
}
