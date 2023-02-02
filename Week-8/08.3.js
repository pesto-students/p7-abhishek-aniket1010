var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  if (head === null || head.next === null) return false;
  while (true) {
    if (fast.next === null || fast.next.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
};
