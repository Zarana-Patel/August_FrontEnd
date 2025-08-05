class ListNode{
    constructor(val,next=null){
        this.val = val;
        this.next = next;
    }
}

function cycle_detection(head){
    let hare = head;
    let tortoise = head;
    while(hare.next !== null && hare.next.next !==null){
        hare = hare.next.next;
        tortoise = tortoise.next;
        if(hare === tortoise){
            return true;
        }
    }
       return false;
}


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let hasCycle = cycle_detection(head);
console.log(hasCycle);


head.next.next.next.next = head.next; // creates a cycle
console.log(cycle_detection(head));   // true
