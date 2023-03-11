function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  let regex = /(.)\1+/;

  // Split the string into an array of characters.
  const arr = str.split("");
  const permutations = [];

  // Return 0 if str contains same character.
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;

  // Helper function - Function to swap variables' content.
  function swap(index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  // Generate arrays of permutations using Heap's algorithm.
  function generate(length) {
    // BASE CASE that only gets hit once!
    if (length === 1) {
      // Make sure to join the characters as we create the permutation arrays
      console.log(arr);
      console.log("***");
      permutations.push(arr.join(""));
    } else {
      for (let i = 0; i < length; i++) {
        // RECURSIVE CALL:
        generate(length - 1);
        swap(length % 2 ? 0 : i, length - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  const filtered = permutations.filter(function (string) {
    return !string.match(regex);
  });

  // Return how many have no repetitions.
  return filtered.length;
}

// Test here.
console.log(permAlone("aab"));
