var maxProfit = function(prices) {
    var len=prices.length;
    var max_so_far=prices[len-1];
    var max_diff=0;
    for(let i=len-1;i>=0;i--){
        max_so_far=Math.max(max_so_far,prices[i]);
        max_diff=Math.max(max_diff,max_so_far-prices[i]);
    }
    return max_diff;
    
};

// Time Complexity - O(N)
// Space Complexity - O(1)