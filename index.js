class Arrays {
  constructor() {
    this.myArray = {};
    this.length = 0;
  }
  push(value) {
    this.myArray[this.length] = value;
    this.length++;
    return this.myArray;
  }
  pop() {
    if (this.length) {
      let temp = this.myArray[this.length - 1];
      delete this.myArray[this.length - 1];
      this.length--;
      return temp;
    }
    return undefined;
  }

  delete(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.myArray[i] = this.myArray[i + 1];
    }
    delete this.myArray[this.length - 1];
    this.length--;
  }
}

const a1 = new Arrays();
a1.push(3);
a1.push(4);
a1.push(8);
a1.push(18);
a1.push(80);
a1.push(9);
// a1.pop();
// a1.pop();
// console.log(a1.pop());
a1.delete(1);
console.log(a1);
