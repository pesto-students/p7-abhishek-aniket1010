var maxDepth = function (root) {
  if (root === null) return 0;

  let maxi = Math.max(maxDepth(root.left), maxDepth(root.right));

  return maxi + 1;
};
