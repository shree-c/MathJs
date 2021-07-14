const {Matrix} = require('./matrix');

describe('matrix operations', function() {
    const matrix = new Matrix([[1, 2], [3, 4], [5, 6]]);
    test('getting the order of matrix', function() {
        expect(matrix.order).toEqual([3, 2]);
    })
    test('creating zero filled matrix for summing', function() {
        expect(Matrix.create2DEmptyMatrix(3, 2).value).toEqual([[0, 0], [0, 0], [0, 0]])
    })
    const matrix2 = new Matrix([[0], [0]]);
    const mres = (Matrix.multiply2Dmatrix(matrix, matrix2));
    test('matrix multiplication', function() {
        expect(mres.order).toEqual([3, 1]);
    })
    test('matrix multiplication result', function() {
        expect(mres.value).toEqual([[0],[0],[0]])
    })
    const m2 = new Matrix([[1, 2], [3, 4]]);
    const m3 = new Matrix([[1, 2], [3, 4]]);
    test('more complex multiplication', function(){
        expect(Matrix.multiply2Dmatrix(m2, m3).value).toEqual([[7, 10], [15, 22]]);
    })
    test('transpose test', ()=>{
        expect(Matrix.transpose(m2).value).toEqual([[1, 3], [2, 4]]);
    })
    const m4 = new Matrix([[1, 2, 4], [15, 5, 6]])
    test('transpose test bigger', ()=>{
        expect(Matrix.transpose(m4).value).toEqual([[1, 15], [2, 5], [4, 6]]);
    })
    const m5 = new Matrix([[0, 1, 1], [1, 0, 1], [1, 1, 0]])
    test('symmetric matrix test', ()=>{
        expect(Matrix.isSymmetric(m5)).toBeTruthy();
    })
    const m6 = new Matrix([[0, 1, 1], [-1, 0, 1], [-1, -1, 0]])
    test('skew symmetric matrix test', ()=>{
        expect(Matrix.isSkewSymmetric(m6)).toBeTruthy();
    });
    const m7 = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    test('sum of a matrix and its transpose is a symmetric matrix', ()=>{
        expect(Matrix.isSymmetric(Matrix.add(m7, Matrix.transpose(m7)))).toBeTruthy();
    })
    test('difference of a matrix and its transpose is a skew symmetric matrix', ()=>{
        expect(Matrix.isSkewSymmetric(Matrix.sub(m7, Matrix.transpose(m7)))).toBeTruthy();
    })
})