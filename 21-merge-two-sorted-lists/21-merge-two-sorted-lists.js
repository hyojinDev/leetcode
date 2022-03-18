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
    let newList = new ListNode();
    let current = newList;
    
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            current.next = new ListNode(list1.val);
//             현재 head(list1.val)노드가 current.next로 할당되었음으로 next값이 Head로 옮겨져야함
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            list2 = list2.next;

        }
//         current값은 항상 더 큰값으로 갱신해주어야 하기 때문에 조건문이 끝날 때마다 재할당
        current = current.next;
    }
//     둘 중 하나가 null 값일 수 있음으로 마지막으로 tail노드에 할당해줌
    current.next = list1 || list2;
//     처음에 new ListNode() 생성할 때 들어간 0을 제외하고 return 해야함
    return newList.next;
};