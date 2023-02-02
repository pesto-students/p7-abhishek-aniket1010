var helper = (root, mini, maxi) => {
  if (root === null) return true;

  if (!(root.val > mini && root.val < maxi)) return false;
  let bool1 = helper(root.left, mini, root.val);
  let bool2 = helper(root.right, root.val, maxi);

  return bool1 && bool2;
};

var isValidBST = function (root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
