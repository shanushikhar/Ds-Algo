const given_array = [1, 3, 2, 1];

function findFirstRecurring(data) {
  if (!data.length) return undefined;
  let map = {};
  for (let value of data) {
    if (!map[value]) {
      map[value] = true;
    } else {
      return value;
    }
  }
  return "All unique";
}

console.log(findFirstRecurring(given_array));
