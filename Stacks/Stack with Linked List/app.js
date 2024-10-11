class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  removeFromFront() {
    let value;
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    } else {
      let temp = this.head;
      value = temp.value;
      this.head = temp.next;
    }
    this.size--;
    return value;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    } else {
      let temp = this.head;
      let value = "";
      while (temp !== null) {
        value += temp.value + " ";
        temp = temp.next;
      }
      return value;
    }
  }
  peak() {
    return this.head.value;
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop(){
    return this.list.removeFromFront();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
console.log(stack.print());
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.print());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.print());
