function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // array[i] is our 'currentMin'
    for (let k = i + 1; k < array.length; k++) {
      if (array[k] < array[i]) {
        const oldMin = array[i];
        array[i] = array[k];
        array[k] = oldMin;
      }
    }
  }
  return array;
}
