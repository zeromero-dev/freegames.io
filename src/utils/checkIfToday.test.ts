import {describe, expect, it, test} from '@jest/globals';
import {checkIfToday} from './checkIfToday';

describe('checkIfToday', () => {
    test('should return true if the date is today', () => {
        const date = new Date();
        expect(checkIfToday(date.toISOString())).toBe(true);
    });
});