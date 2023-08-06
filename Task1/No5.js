function findSmallestAndLargest(arr) {
  let smallest = arr[0];
  let largest = arr[0];

  for (const num of arr) {
    if (num < smallest) {
      smallest = num;
    }
    if (num > largest) {
      largest = num;
    }
  }

  console.log(`smallest number = ${smallest}`);
  console.log(`largest number = ${largest}`);
}

const arrayList = [4, 2, 8, 5, 1];
findSmallestAndLargest(arrayList);
