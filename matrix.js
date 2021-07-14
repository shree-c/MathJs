class Matrix {
    constructor(value) {
        this.value = value;
        this.dimension = this.order.length;
    }
    _order = [];
    _getOrder(arr) {
        if (Array.isArray(arr)) {
            this._order.push(arr.length);
            this._getOrder(arr[0]);
        }
    }
    get order() {
        if (this._order.length)
            return this._order;
        else {
            this._getOrder(this.value);
            return this._order;
        }
    }
    static create2DEmptyMatrix(len, brd) {
        const hold = [];
        for (let i = 0; i < len; i++) {
            const temp = [];
            for (let j = 0; j < brd; j++) {
                temp.push(0);
            }
            hold.push(temp);
        }
        return new Matrix(hold);
    }
    static multiply2Dmatrix(m1, m2) {
        if (m1.dimension > 2 && m2.dimension > 2) {
            throw new Error('product of matrices of more then two dimensions is not yet supported');
        } else if (m1.order[1] != m2.order[0]) {
            throw new Error('the product of these matrices is undefined');
        } else {
            let hold = Matrix.create2DEmptyMatrix(m1.order[0], m2.order[1]);
            for (let i = 0; i < m1.order[0]; i++) {
                for (let j = 0; j < m2.order[1]; j++) {
                    for (let k = 0; k < m1.order[1]; k++) {
                        hold.value[i][j] += m1.value[i][k] * m2.value[k][j];
                    }
                }
            }
            return hold;
        }
    }
    static transpose(m) {
        const order = m.order;
        //creating new empty matrix to return of exchanged order
        const newM = Matrix.create2DEmptyMatrix(order[1], order[0]);
        for (let i = 0; i < order[0]; i++) {
            for (let j = 0; j < order[1]; j++) {
                newM.value[j][i] = m.value[i][j];
            }
        }
        return newM;
    }
    static areEqual(m1, m2) {
        //throw error if of different order
        if (m1.order[0] !== m2.order[0] && m1.order[1] !== m2.order[1]) {
            throw Error('two matrices of different orders cannot be checked for equality')
        } else {
            for (let i = 0; i < m1.order[0]; i++) {
                for (let j = 0; j < m1.order[1]; j++) {
                    if (m1.value[i][j] !== m2.value[i][j])
                        return false;
                }
            }
            return true;
        }

    }
    static isSymmetric(m) {
        if (m.order[0] !== m.order[1])
            throw Error('not a square matrix!')
        else {
            const transposed = Matrix.transpose(m);
            return Matrix.areEqual(m, transposed);
        }
    }
    static isSkewSymmetric(m) {
        if (m.order[0] !== m.order[1])
            throw Error('not a square matrix!')
        else {
            const transposed = Matrix.transpose(m);
            return Matrix.areEqual(transposed, Matrix.multiplyByConstant(-1, m))

        }
    }
    static multiplyByConstant(k, m) {
        const retMat = Matrix.create2DEmptyMatrix(m.order[0], m.order[1])
        for (let i = 0; i < m.order[0]; i++) {
            for (let j = 0; j < m.order[1]; j++) {
                retMat.value[i][j] = m.value[i][j] * k;
            }
        }
        return retMat;
    }
    static add(m1, m2) {
        const retMat = Matrix.create2DEmptyMatrix(m1.order[0], m1.order[1])
        for (let i = 0; i < m1.order[0]; i++) {
            for (let j = 0; j < m1.order[1]; j++) {
                retMat.value[i][j] = m1.value[i][j] + m2.value[i][j];
            }
        }
        return retMat;
    }
    static sub(m1, m2) {
        const retMat = Matrix.create2DEmptyMatrix(m1.order[0], m1.order[1])
        for (let i = 0; i < m1.order[0]; i++) {
            for (let j = 0; j < m1.order[1]; j++) {
                retMat.value[i][j] = m1.value[i][j] - m2.value[i][j];
            }
        }
        return retMat;
    }
}
exports.Matrix = Matrix