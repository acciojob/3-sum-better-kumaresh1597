function threeSum(arr, target) {
// write your code here
	let n = arr.length;
  for (let i = 0; index < n; i++) {
	  let l = i+1;
	  let h = n-1;
	  let tar = target - arr[i];
	  while(l<h){
		  let sum = arr[l] + arr[h];
		  if(sum == tar){
			  let ans = [arr[i],arr[l],arr[h]];
			  return ans;
		  }
		  else if (sum < tar) {
		  	l++;
		  }
		  else{
			  h--;
		  }
	  }
  }
	return -1;
}

module.exports = threeSum;
