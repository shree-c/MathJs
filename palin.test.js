const { longestPalindrome } = require('./longestpalin')
describe('palindrome test', () => {
    test('abbaxabb', () => {
        expect(longestPalindrome('abbaxabb')).toBe('bbaxabb');
    });
    test('mmmmm', () => {
        expect(longestPalindrome('mmmmm')).toBe('mmmmm');
    });
    test('m', () => {
        expect(longestPalindrome('m')).toBe('m');
    });
    test('ada', () => {
        expect(longestPalindrome('ada')).toBe('ada');
    });
    test('babad', () => {
        expect(longestPalindrome('babad')).toBe('bab');
    });
    test('ac', () => {
        expect(longestPalindrome('ac')).toBe('a');
    });
    test('aaaaaa', () => {
        expect(longestPalindrome('aaaaa')).toBe('aaaaa');
    });
    test('mmmmmmmm', () => {
        expect(longestPalindrome('mmmmmmmm')).toBe('mmmmmmmm');
    });
})