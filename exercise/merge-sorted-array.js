const array_1 = [1, 12, 34, 889];
const array_2 = [2, 11, 29, 37, 99];

function mergeArray(arr1, arr2) {
  if (!arr1) return arr2;
  if (!arr2) return arr1;
  const sortedArr = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      sortedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      sortedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return sortedArr;
}

console.log(mergeArray(array_1, array_2));
