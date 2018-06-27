import { MaxSubarray } from '../src';
import { expect } from 'chai';

describe('array', () => {
	it('max sub array.', () => {
		const target = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
		const result = { low: 7, high: 10, sum: 43 };
		expect(MaxSubarray(target)).deep.equal(result);
	});
});





