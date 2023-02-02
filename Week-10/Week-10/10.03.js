var levelOrder = function (root) {
    let queue = [];
    if (root === null) return queue;
    let ans = [];
    queue.push(root);
    while (queue.length) {
      let levels = queue.length;
      let subans = [];
      for (let i = 0; i < levels; i++) {
        if (queue[0].left) queue.push(queue[0].left);
        if (queue[0].right) queue.push(queue[0].right);
  
        subans.push(queue.shift().val);
      }
      ans.push(subans);
    }
    return ans;
  };
  
  