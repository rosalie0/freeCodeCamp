function updateInventory(arr1, arr2) {
  const combined = arr1;

  // iterate thru arr2
  for (let i = 0; i < arr2.length; i++) {
    // get current arr2 elem's NAME (aka arr2[i][1])
    const quantityToInsert = arr2[i][0];
    const nameToInsert = arr2[i][1];

    // loop through combined to see if we have a name match using, k
    let existsAlready = false;
    for (let k = 0; k < combined.length; k++) {
      const combinedQuantity = combined[k][0];
      const combinedName = combined[k][1];

      if (combinedName === nameToInsert) {
        // if so, update combined's quantity -> combined[k][0] += arr2[i][0]
        const newQuantity = combinedQuantity + quantityToInsert;
        combined[k][0] = newQuantity;
        existsAlready = true;
      }
    }
    // outside loop, if we never found it, just push it onto combined
    if (!existsAlready) combined.push(arr2[i]);
  }

  // sort alphabetically before returning
  // At this point, our 'combined' array should be done.
  combined.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    else return 0;
  });

  return combined;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

/* 
[
  [88, "Bowling Ball"],
  [2, "Dirty Sock"],
  [3, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [5, "Microphone"],
  [7, "Toothpaste"]
] 
*/
updateInventory(curInv, newInv);
