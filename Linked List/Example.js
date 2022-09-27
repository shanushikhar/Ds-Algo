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
      //console.log("tail..", this.tail);
      this.tail.nextxx = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Pop
  pop() {
    //const newNode = new Node(value)
    if (!this.heads) return "No Node found";

    let temp = this.heads;
    let pre = this.heads;

    while (temp.nextxx) {
      pre = temp;
      temp = temp.nextxx;
    }
    this.tail = pre;
    this.tail.nextxx = null;
    this.length--;
    if (this.length === 0) {
      this.heads = null;
      this.tail = null;
    }
    return temp; //will return the popped item
    //return this // will return the remaining nodes
  }
}

const Linked = new LinkedList(3);
//console.log(Linked);
Linked.push(5);
Linked.push(7);
Linked.push(11);
console.log(Linked);

console.log(Linked.pop());
console.log(Linked.pop());
console.log(Linked.pop());
console.log(Linked.pop());
console.log(Linked.pop());
console.log(Linked);
