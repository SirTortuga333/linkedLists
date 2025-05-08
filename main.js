import { LinkedList } from "./linkedList.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.prepend("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");

// console.log(list.size());
// console.log(list.tail());
// console.log(list.at(3));
// console.log(list.at(8));
// list.pop();
// console.log(list.contains("dog"));
// console.log(list.contains("bird"));
// console.log(list.find("parrot"));
// // console.log(list.find("pete"));
// console.log(list.insertAt("Violeta", 3));
// console.log(list.insertAt("Violeta", 9));
// console.log(list.toString());
// console.log(list.removeAt(3));

console.log(list.toString());
