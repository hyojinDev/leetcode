/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(0);
    let head = newList;
    let index = 1;
    while (list1 != null && list2 != null) {
        // console.log('while : ', list1, list2, newList)
        if (list1.val < list2.val) {
            // console.log('A',index, newList, newList.next, list1, list2, head)
            newList.next = list1;
            list1 = list1.next;
             console.log('B', index, newList, newList.next, list1, list2, head)
        } else {
             // console.log('C',index, newList, newList.next, list1, list2, head)
            newList.next = list2;
            list2 = list2.next;
             console.log('D',index, newList, newList.next, list1, list2, head)
        }
         // console.log('E',index, newList, newList.next, list1, list2, head)
        newList = newList.next;
         console.log('F',index, newList, newList.next, list1, list2, head)
        index++;
    }
    console.log('Final',index, newList, newList.next, list1, list2, head)
    if (list1 === null) {
        newList.next = list2;
    }
    else {
        newList.next = list1;
    }
    return head.next;
};