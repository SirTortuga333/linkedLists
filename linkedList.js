import { Node } from "./node.js";
export class LinkedList {
  headNode = null;

  append(value) {
    // Adds to end of list
    if (this.head() === null) {
      const node = new Node();
      node.value = value;
      this.headNode = node;
      return;
    }

    let tmp = this.head();
    while (tmp.nextNode !== null) tmp = tmp.nextNode;
    const node = new Node();
    node.value = value;
    tmp.nextNode = node;
    return;
  }
  prepend(value) {
    // Adds to begining of list
    if (this.head() === null) this.append(value);
    else {
      const node = new Node();
      node.value = value;
      node.nextNode = this.head();
      this.headNode = node;
    }
    return;
  }
  size() {
    // returns size of list (counts nodes)
  }
  head() {
    // returns first node
    return this.headNode;
  }
  tail() {
    // returns last node
  }
  at(index) {
    // returns node at index
  }
  pop() {
    // removes last node
  }
  contains(value) {
    // returns true if founds value on list
  }
  find(value) {
    // returns index if founds value on list
  }
  toString() {
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null

    if (this.head() === null) return "Empty Linked List.";

    let string = "";
    let tmp = this.head();
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    if (tmp === null) string += "null";
    return string;
  }
  insertAt(value, index) {
    // inserts a node with "value" at "index"
  }
  removeAt(index) {
    // removes node at "index"
  }
}
