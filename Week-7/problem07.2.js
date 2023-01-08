var spiralOrder = function (matrix) {
  var rowBegin = 0;
  var rowEnd = matrix.length - 1;
  var colBegin = 0;
  var colEnd = matrix[0].length - 1;
  var ans = [];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      ans.push(matrix[rowBegin][i]);
    }
    if (ans.length == matrix.length * matrix[0].length) break;
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      ans.push(matrix[i][colEnd]);
    }
    if (ans.length == matrix.length * matrix[0].length) break;
    colEnd--;
    for (let i = colEnd; i >= colBegin; i--) {
      ans.push(matrix[rowEnd][i]);
    }
    if (ans.length == matrix.length * matrix[0].length) break;
    rowEnd--;
    for (let i = rowEnd; i >= rowBegin; i--) {
      ans.push(matrix[i][colBegin]);
    }
    if (ans.length == matrix.length * matrix[0].length) break;
    colBegin++;
  }
  return ans;
};

// Time Complexity-O(n^2) we traverse each element of the matrix exactly once
// Space Complexity-O(n^2) to store our ans , no additional space required
