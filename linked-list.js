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

  //  private method
  /** Increase size by 1 for each new Node `append(value)`/ `prepend(value)` */
  #addToSize() {
    this.#size++;
  }

  /** Decrease size by 1 for each new Node `pop()` */
  #subtractToSize() {
    this.#size--;
  }

  /** Add value to the end of the linked list
   * @value {Node}
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
   * @value {Node}
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

  /** Remove the last node from the linked list */
  pop() {
    let curr = this.#head;
    if (this.#size === 1) {
      this.#head = this.#tail = null;
      this.#subtractToSize();
      return curr;
    }

    while (curr.nextNode.nextNode !== null) {
      curr = curr.nextNode;
    }

    let temp = curr.nextNode;
    curr.nextNode = null;
    this.#tail = curr;
    this.#subtractToSize();
    return temp;
  }

  /** Get the node at given index */
  at(index) {
    if (index > this.#size) {
      throw new Error("Given index is out of range");
    } else if (index === this.#size) {
      return this.#tail;
    }

    let currIndex = 1;
    let curr = this.#head;
    while (currIndex !== index) {
      curr = curr.nextNode;
      currIndex++;
    }

    return curr;
  }

  contains(value) {
    let curr = this.#head;

    while(curr !== null) {
        if (curr.value === value) {
            return true;
        }
        curr = curr.nextNode;
    }

    return false;
  }

  find(value) {
    let curr = this.#head;
    let index = 1;

    while(curr !== null) {
        if (curr.value === value) {
            return index;
        }
        index++;
        curr = curr.nextNode;
    }

    return null;
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

let dataLL1 = new LinkedList();
dataLL1.append("head");
dataLL1.append("newtail");
dataLL1.prepend("newhead");

console.log(dataLL1.find("newtail"));
