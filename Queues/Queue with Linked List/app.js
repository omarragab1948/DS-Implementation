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
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
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
  peek() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    }
    return this.head.value;
  }
}

class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  peek() {
    return this.list.peek();
  }
  print() {
    return this.list.print();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.print());  
console.log(queue.dequeue());
console.log(queue.print()); 
console.log(queue.peek());  
