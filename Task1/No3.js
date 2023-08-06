function reversedArray() {
  const arr = [1, 2, 3, 4, 5];
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  console.log(reversedArr);
}

reversedArray();
