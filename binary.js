class Binary {
    constructor(bits) {
        this.bits = bits;
    }
    assertIsBinary(other) {
        if (!(other instanceof Binary)) {
            throw new Error('not an instance of Binary')
        }
    }
    assertSameNoOfBits(other) {
        if (this.bits.length != other.bits.length) {
            throw new Error(`Bits mismatch a = ${this.bits.length} b = ${other.bits.length}`)
        }
    }
    toDec() {
        let total = 0;
        for (let x in this.bits) {
            if (this.bits[x] === 1) {
                total += 2 ** (this.bits.length - x - 1);
            } else if (this.bits[x] !== 0) {
                throw Error(`${this.bits[x]} is not allowed in binary`);
            }
        }
        return total;
    }
    and(other) {
        this.assertIsBinary(other);
        this.assertSameNoOfBits(other);
        const newbits = combineMap(this.bits, other.bits, (a, b) => a & b);
        return new Binary(newbits);
    }
    or(other) {
        this.assertIsBinary(other);
        this.assertSameNoOfBits(other);
        const newbits = combineMap(this.bits, other.bits, (a, b) => a | b);
        return new Binary(newbits);
    }
    xor(other) {
        this.assertIsBinary(other);
        this.assertSameNoOfBits(other);
        const newbits = combineMap(this.bits, other.bits, (a, b) => a ^ b);
        return new Binary(newbits);
    }
    not() {
        const newBits = this.bits.map(x => x === 0 ? 1 : 0)
        return new Binary(newBits);
    }
    static fromUnsigned(n) {
        if (!(Number.isInteger(n))) {
            throw new Error('can only create binary from integer');
        }
        if (n === 0) {
            return new Binary([0]);
        }
        const bits = [];
        let nearestPowerOfTwo = Math.floor(Math.log2(n));
        let numberInProgress = n;
        while (nearestPowerOfTwo >= 0) {
            if (numberInProgress >= 2 ** nearestPowerOfTwo) {
                bits.push(1);
                numberInProgress -= 2 ** nearestPowerOfTwo;
            } else {
                bits.push(0);
            }
            nearestPowerOfTwo -= 1;
        }
        return new Binary(bits)
    }

}
function combineMap(a1, a2, fn) {
    return a1.map((val, index) => fn(val, a2[index]));
}
let t1 = new Binary([1, 1, 1, 0])
let t2 = new Binary([0, 1, 0, 0])
console.log(Binary.fromUnsigned(100000).toDec())
debugger
