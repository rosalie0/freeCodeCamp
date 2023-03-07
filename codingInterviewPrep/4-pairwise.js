function pairwise(arr, arg) {
  // sumOfIndices variable
  let sumOfIndices = 0;
  const seenIndices = [];
  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    // inner loop through arr
    for (let k = i + 1; k < arr.length; k++) {
      // add these two, if they are equal to arg AND that both indices havent been 'seen' yet
      if (
        arr[i] + arr[k] === arg &&
        !seenIndices.includes(i) &&
        !seenIndices.includes(k)
      ) {
        // add their indices to sumOfIndices
        sumOfIndices = sumOfIndices + i + k;
        // add these indices to our seenIndices to make sure we don't use them again
        seenIndices.push(i);
        seenIndices.push(k);
      }
    }
  }
  // return sumOfIndices
  return sumOfIndices;
}
