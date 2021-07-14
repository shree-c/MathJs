class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.start = null;
  }
  pop() {
    if (!this.start) {
      throw new Error('the queue is empty 💔');
    } else {
      const retNode = this.start;
      this.start = this.start.next;
      return retNode;
    }
  }
  push(value) {
    if (!this.start) {
      this.start = new Node(value);
    } else {
      let temp = this.start;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }
  }
  peek() {
    if (!this.start) {
      return null;
    } else {
      return this.start.value;
    }

  }
  print() {
    if (!this.start) {
      throw new Error('empty queue 💔')
    } else {
      let temp = this.start;
      let retTex = '';
      while (temp) {
        if (typeof temp.value === 'object') {
          retTex += `👉 ${JSON.stringify(temp.value)}\n`
        } else {
          retTex += `👉 ${temp.value}\n`
        }
        temp = temp.next;
      }
      return retTex;
    }
  }
}
exports.Queue = Queue;