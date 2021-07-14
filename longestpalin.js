var longestPalindrome = function (s) {
    const strLen = s.length, retBuff = [0, 0, 0], tempBuff = {
        str: null,
        end: null,
        get len() {
            return ((this.end - this.str) + 1);
        }
    };
    for (let i = 0; i < strLen; i++) {
        //if prev letter is still in relevence and tempbuf's prev letter is equal to the current one
        if (tempBuff.end === (i - 1) && s[i] === s[tempBuff.str - 1]) {
            tempBuff.end++;
            tempBuff.str--;
        }
        //prev letter not in relevence and checking for three letter palindrome
        else if (s[i] === s[i - 2] && s[tempBuff.str]) {
            tempBuff.str = i - 2;
            tempBuff.end = i;
        }
        //prev letter not in relevence and checking for two letter palindrome
        else if (s[i] === s[i - 1]) {
            tempBuff.str = i - 1;
            tempBuff.end = i;
        }
        if (tempBuff.len === 1) {
            tempBuff.str = tempBuff.end = i;
        }

        if (retBuff[2] < tempBuff.len) {
            retBuff[0] = tempBuff.str;
            retBuff[1] = tempBuff.end;
            retBuff[2] = tempBuff.len;
        }
    }
    return s.slice(retBuff[0], retBuff[1] + 1);
};
exports.longestPalindrome = longestPalindrome;
console.log(longestPalindrome('aaaa'))