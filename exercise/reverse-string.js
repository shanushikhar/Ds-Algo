const data = "Hi this is shikhar";
function reverse(value) {
  const reversedString = [];
  for (let i = value.length; i >= 0; i--) {
    reversedString.push(data[i]);
  }
  return reversedString.join("");
}

console.log(reverse(data));
