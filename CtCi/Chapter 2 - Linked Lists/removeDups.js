// 2.1 - removeDups

const LinkedList = value => {
  this.value = value;
  this.next = null;
};

const checkDups = (head, node) => {
  let currNode = head;
  while (currNode !== node) {
    if (currNode.value === node.value) {
      return true;
    }
    currNode = currNode.next;
  }
  return false;
};

const removeDups = head => {
  let node = head;
  while (node !== null) {
    if (node.next !== null && checkDups(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
