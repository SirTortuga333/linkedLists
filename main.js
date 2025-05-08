import { LinkedList } from "./linkedList.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.prepend("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

console.log(list.toString());