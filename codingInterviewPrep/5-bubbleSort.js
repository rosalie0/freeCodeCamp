function bubbleSort(array) {
  // [10, 9, 6] should become [6, 9, 10]
  // least to greatest
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
