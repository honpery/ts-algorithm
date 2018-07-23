import { expect } from 'chai';
import { Search } from '../src';

const arr = [1, 2, 3, 4, 21, 22, 30];

describe('search', () => {
	it('binary search.', () => {
		expect(Search.binary(arr, 2)).eq(1);
		expect(Search.binary(arr, 30)).eq(6);
		expect(Search.binary(arr, 40)).eq(-1);
	});
});
