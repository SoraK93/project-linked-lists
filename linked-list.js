class Node {
  constructor(data = null) {
    this.value = data;
    this.nextNode = null;
  }
}

class LinkedList {
  // private variables
  #head;
  #tail;
  #size;

  /** LinkedList initializes with `head`, `tail`, and `size` */
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  /** Add value to the end of the linked list
   * @value `{Node}`
   */
  append(value) {
    if (value === undefined || value === null) {
      throw new Error("No value provided");
    }

    let node = new Node(value);

    if (this.#size === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.nextNode = node;
      this.#tail = node;
    }

    this.#addToSize();
  }

  /** Add value to the start of the linked list
   * @value `{Node}`
   */
  prepend(value) {
    if (value === undefined || value === null) {
      throw new Error("No value provided");
    }

    let node = new Node(value);

    if (this.#size === 0) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.nextNode = this.#head;
      this.#head = node;
    }

    this.#addToSize();
  }

  /** Increase size by 1 for each new Node `append(value)`/ `prepend(value)` */
  #addToSize() {
    this.#size++;
  }

  /** Get instance variable of the linked list */
  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }
  get tail() {
    return this.#tail;
  }
}

let data2 = new Node("data2");
// console.log(data2);
let dataLL1 = new LinkedList();
dataLL1.append("tail");
dataLL1.append("newtail");
dataLL1.prepend("head");
console.log(dataLL1.head);
