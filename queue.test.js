const { Queue } = require('./index')

describe('basic queue operations test⌛️', () => {
  test('empty queue test', () => {
    const queue = new Queue();
    expect(queue.start).toBeNull();
    expect(() => { queue.print() }).toThrowError(new Error('empty queue 💔'));
    expect(() => { queue.pop() }).toThrowError(new Error('the queue is empty 💔'))
  })
  test('pushing single value', () => {
    const queue = new Queue();
    queue.push(2);
    expect(queue.pop().value).toBe(2);
  });
  test('popping single value', () => {
    const queue = new Queue();
    queue.push(2);
    queue.pop();
    expect(queue.start).toBeNull();
  })
  test('pushing null value', () => {
    const queue = new Queue();
    queue.push(null);
    expect(queue.start.value).toBeNull();
  })
  test('popping null value', () => {
    const queue = new Queue();
    queue.push(null);
    queue.pop();
    expect(queue.start).toBeNull();
  })
  test('printing queue', () => {
    const queue = new Queue();
    queue.push('shree');
    queue.push(2);
    expect(queue.print()).toBe('👉 shree\n👉 2\n')
  })
  test('pushing a object', () => {
    const queue = new Queue();
    const obj = {
      name: 'shree',
      age: 21,
      admin: true
    };
    queue.push(obj);
    expect(queue.pop().value).toEqual(obj);
  });
  test('printing object', () => {
    const queue = new Queue();
    const obj = {
      name: 'shree',
      age: 21,
      admin: true
    };
    queue.push(obj);
    expect(queue.print()).toBe(`👉 ${JSON.stringify(obj)}\n`)
  });
  test('testing whether queue logic works correctly', ()=>{
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop().value).toBe(1);
    expect(queue.pop().value).toBe(2);
    expect(queue.pop().value).toBe(3);
  });
  test('testing peek operation with value', ()=>{
    const queue = new Queue();
    queue.push(1);
    expect(queue.peek()).toBe(1);
  });
  test('testing peek operation with value', ()=>{
    const queue = new Queue();
    expect(queue.peek()).toBeNull;
  })
})