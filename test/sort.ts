import { expect } from 'chai';
import { Sort } from '../src';

const target = [3, 1, 2, 22, 30, 21, 4];
const result = [1, 2, 3, 4, 21, 22, 30];

describe('sort test.', () => {
	it('insertion sort.', () => {
		expect(Sort.insertion(target)).deep.equal(result);
	});
});
