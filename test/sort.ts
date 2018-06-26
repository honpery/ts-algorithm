import { expect } from 'chai';
import { Sort } from '../src';


const result = [1, 2, 3, 4, 21, 22, 30];

function getTarget() {
	const target = [3, 1, 2, 22, 30, 21, 4];
	return JSON.parse(JSON.stringify(target));
}

describe('sort test.', () => {
	it('insertion sort.', () => {
		expect(Sort.insertion(getTarget())).deep.equal(result);
	});

	it('merge sort.', () => {
		expect(Sort.merge(getTarget())).deep.equal(result);
	})
});
