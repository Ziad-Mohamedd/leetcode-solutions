import { ListNode } from "./141-Linked-List-Cycle";

function isPalindrome(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    let slow2 = head;
    
    while(fast !== null && fast.next !== null && slow) {
        slow = slow.next
        fast = fast.next.next;
    }
    let arr = head;
    if (slow) arr = reverseLinkedList(slow);


    while(slow2 && arr) {
        if ( slow2.val !== arr?.val  ) {
            return false;
        }

        slow2 = slow2?.next;
        arr = arr?.next ;

    }

    
    return true;
};

function reverseLinkedList(head: ListNode | null): ListNode {
    let prev,
        curr = head;

    while (curr != null) {
        let nxt = curr.next;
        curr.next = prev;
        if (prev !== null) {
        prev = curr;
        }
        curr = nxt;
    }
    return prev;
}