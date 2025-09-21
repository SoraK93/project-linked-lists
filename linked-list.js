class Node {
  constructor(data = null, nextNode = null) {
    if (nextNode !== null && !(nextNode instanceof Node)) {
      throw new Error(
        "Only null or Node type data are allowed in nextNode parameter"
      );
    }

    this.value = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  #head;
  #tail;
  #size;

  constructor(value) {
    this.#head = new Node(value);
    this.#tail = null;
    this.#size = 1;
  }

  /** Add value to the end of the linked list
   * @value {Node}
   */
  append(value) {
    if (value === undefined || value === null) {
      throw new Error("No value provided");
    }
    let node = new Node(value);
    this.#tail = node;
    node.nextNode = null;
    this.addToSize();
  }

  /** Add value to the start of the linked list
   * @value {Node}
   */
  prepend(value) {
    if (value === undefined || value === null) {
      throw new Error("No value provided");
    }
    let node = new Node(value);
    node.nextNode = this.#head;
    this.#head = node;
    this.addToSize();
  }

  get size() {
    return this.#size;
  }

  addToSize() {
    return this.#size++;
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
let dataLL1 = new LinkedList("head");
dataLL1.append("newtail");
dataLL1.prepend("newhead");
console.log(dataLL1.size);
