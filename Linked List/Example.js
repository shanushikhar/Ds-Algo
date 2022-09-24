// "New" keyword specifically calling the constructor in the class.

class Node {
  constructor(value) {
    this.value = value;
    this.nextxx = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.heads = newNode;
    this.tail = this.heads;
    this.length = 1;
  }
  // Push
  push(value) {
    const newNode = new Node(value);
    if (!this.heads) {
      this.heads = newNode;
      this.tail = newNode;
    } else {
      console.log("tail..", this.tail);
      this.tail.nextxx = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Pop
}

const Linked = new LinkedList(4);
//console.log(Linked);
Linked.push(5);
Linked.push(7);
console.log(Linked);
