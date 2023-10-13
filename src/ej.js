const merge = (nums1, m, nums2, n)  => {
  let i= m+n-1;
  let j = n-1;
  let i2= m-1;
  for(let x= m+n-1; x>=0; x--){
    if(nums1[i2] > nums2[j]){
      nums1[i] = nums1[i2];
      i2--;
      i--;
    } else {
      nums1[i] = nums2[j];
      j--;
      i--;
    } 
  }
  return nums1;
}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // [1,2,2,3,5,6]