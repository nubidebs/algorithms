/*
* https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list
*/
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data);
    if( head === null ){
        head = newNode;
        return head;
    }
    newNode.next = head
    head = newNode;
    
    return head;
}