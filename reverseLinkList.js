
 
 const reverseList = function (head) {
    let prev = null
    let next = null
    //iterate through the linked list
    while (head != null) {
       next = head.next;
        //flip the next pointer to the previous value
      head.next = prev;
        //move the previous pointer forward
        prev = head
        //move the current pointer forward
       head = next;
    }

    return prev
};

reverseList([ 1, 2, 3, 4, 5 ])

