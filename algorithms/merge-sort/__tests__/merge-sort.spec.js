import { mergeSort } from '../';

describe('Merge Sort', () => {
    it('sort', () => {
        const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(mergeSort(array)).toEqual(expectedArray);
    })
});
