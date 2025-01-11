class Hashmap {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue = (hashValue + key.charCodeAt(i) * i) % this.data.length;
    }
    return hashValue;
  }

  set(key, value) {
    let hashValue = this._hash(key);
    if (!this.data[hashValue]) {
      this.data[hashValue] = [];
    }
    this.data[hashValue].push([key, value]);

    return this.data;
  }

  get(key) {
    let hashValue = this._hash(key);
    const currentBucket = this.data[hashValue];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }

      //   for (let [indexKey, value] of currentBucket) {
      //     if (indexKey === key) return value;
      //   }
    }
    return "not found";
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let [key, value] of this.data[i]) {
          keys.push(key);
        }
      }
    }
    return keys;

    // let result = [];
    // // loop through all the elements
    // for (let i = 0; i < this.data.length; i++) {
    //   // if it's not an empty memory cell
    //   if (this.data[i] && this.data[i].length) {
    //     // but also loop through all the potential collisions
    //     if (this.data.length > 1) {
    //       for (let j = 0; j < this.data[i].length; j++) {
    //         result.push(this.data[i][j][0]);
    //       }
    //     } else {
    //       result.push(this.data[i][0]);
    //     }
    //   }
    // }
    // return result;
  }
}

const hashmap = new Hashmap(2);
hashmap.set("hey", 22);
hashmap.set("heys", 23);
hashmap.set("heyss", 212);
hashmap.set("apple", 12);
hashmap.set("apples", 1122);
console.log(hashmap.get("heys"));
console.log(hashmap.keys());
