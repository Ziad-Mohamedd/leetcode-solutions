import { ListNode } from "./141-Linked-List-Cycle";

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head,
        fast = head;
    
    while(slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next?.next;
    }
    
    return slow
};