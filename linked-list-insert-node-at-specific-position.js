/*
* https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?isFullScreen=true
*/

function insertNodeAtPosition(llist, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    // List is empty
    if( llist === null ){
        llist = newNode;
        return llist;
    }
    
    let tempNode = llist
    let i = 1;
    // run through the nodes before the requested position
    while(i < position) {
        // save info of the next node
        tempNode = tempNode.next;
        i++;
    }
  
    // we are out of the loop at the requested position 
    newNode.next= tempNode.next
    tempNode.next = newNode
    // return the head node of the revised list
    return llist;
}
