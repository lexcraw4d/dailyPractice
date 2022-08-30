// A simple javascript program to introduce a linked list
var head; // head of list
/* Linked list Node.  This inner class is made  so that
       main() can access it */
class Node {
constructor(value)
{
this.value = value;
this.next = null;
} // Constructor
}

/* method to create a simple linked list with 3 nodes*/

var head = new Node(1);
console.log(head)
var second = new Node(2);
console.log(second)
var third = new Node(3);
console.log(third) 
/* Three nodes have been allocated dynamically.
          We have references to these three blocks as head, 
          second and third
 
          llist.head        second              third
             |                |                  |
             |                |                  |
         +----+------+     +----+------+     +----+------+
         | 1  | null |     | 2  | null |     |  3 | null |
         +----+------+     +----+------+     +----+------+ */

head.next = second; // Link first node with the second node
console.log(head)
/* Now next of the first Node refers to the second.  So they
            both are linked.
 
         llist.head        second              third
            |                |                  |
            |                |                  |
        +----+------+     +----+------+     +----+------+
        | 1  |  o-------->| 2  | null |     |  3 | null |
        +----+------+     +----+------+     +----+------+ */

second.next = third; // Link second node with the third node
console.log(second)
console.log(head)
/*  Now next of the second Node refers to third.  So all three
            nodes are linked.
 
         llist.head        second              third
            |                |                  |
            |                |                  |
        +----+------+     +----+------+     +----+------+
        | 1  |  o-------->| 2  |  o-------->|  3 | null |
        +----+------+     +----+------+     +----+------+ */
