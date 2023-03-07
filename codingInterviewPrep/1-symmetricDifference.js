function sym() {
  const args = Array.from(arguments); // creates an array of the arguments given.
  if (args.length < 2) return false;

  while (args.length >= 2) {
    let A = args[0];
    let B = args[1];
    let uniques = [];

    // go through A, if the element is not in B, push into uniques
    for (let elem of A) {
      if (!B.includes(elem)) uniques.push(elem);
    }
    // go through B, if the element is not in A, push into uniques
    for (let elem of B) {
      if (!A.includes(elem)) uniques.push(elem);
    }

    // 'shift' twice off of args (pop from front twice)
    args.shift();
    args.shift();
    // unshift uniques into args (insert into front our symm diff)
    args.unshift(uniques);
  }

  let diff = args[0];
  // need to sort and remove dupes
  diff = diff.sort((a, b) => a - b);
  diff = diff.filter((elem, i) => diff.indexOf(elem) === i);
  return diff;
}

const result1 = sym([1, 2, 3], [5, 2, 1, 4]);
console.log(result1); //[3, 4, 5]

const result2 = sym([1, 2, 3, 3], [5, 2, 1, 4]);
console.log(result2); // [3, 4, 5]

const result3 = sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
console.log(result3); // [1, 4, 5]

const result4 = sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
console.log(result4); //[2, 3, 4, 6, 7]

const result5 = sym(
  [3, 3, 3, 2, 5],
  [2, 1, 5, 7],
  [3, 4, 6, 6],
  [1, 2, 3],
  [5, 3, 9, 8],
  [1]
);
console.log(result5); // [1, 2, 4, 5, 6, 7, 8, 9]
