function insertionSort(arr) {
  // [1, 6, 7, 3]
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let pointer = i - 1;
    while (pointer >= 0 && arr[pointer] > temp) {
      // while the pointer is not too far AND pointer's element is greater than temps...
      // shift that item to the right and decrement pointer
      arr[pointer + 1] = arr[pointer];
      pointer--;
    }

    // We are now at our 'empty spot' in the array -
    // take what's in temp and put it in the empty spot (off by one).
    arr[pointer + 1] = temp;
  }

  return arr;
}
