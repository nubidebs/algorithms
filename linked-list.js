/*
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 *
 * To print all the data inside we just have to traverse through all the nodes. 
 * To do this, we use a while loop, as long as the node (identified by head) is not null,
 * we keep printing it’s data and move to the next node.
 */

function printLinkedList(head) {
    while (head) {
        console.log(head.data);
        head = head.next;
    };
};