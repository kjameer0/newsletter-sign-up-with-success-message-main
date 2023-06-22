function ListNode(val) {
  this.val = val;
  this.next = null;
}
let list = new ListNode(6);
const vals = [4, 3, 35, 19, 0, 5, 6, 3, 4, 5];
function addMultipleVals(vals, list) {
  vals.forEach((element) => {
    list.next = new ListNode(element);
    list = list.next;
  });
}
addMultipleVals(vals, list);
//console.log(list);
//this function should take a linked list root
//and output an array of every node
function linkedListVisual(list) {
  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }
  console.log(arr);
}
linkedListVisual(list);
//input: linked list and which 0 indexed element to remove
//output: same linked list with the element removed
function removeLinkedListElement(list, idx) {
  //loop linked list til index before correct index
  //attach previous list item to list item after
  
}
