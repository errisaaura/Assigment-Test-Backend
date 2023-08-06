function duplicateInArray(arr) {
  const duplicates = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (duplicates[currentNum]) {
      duplicates[currentNum]++;
    } else {
      duplicates[currentNum] = 1;
    }
  }

  for (const num in duplicates) {
    if (duplicates[num] > 1) {
      console.log("Jumlah Angka " + `${num} = ${duplicates[num]}`);
    }
  }
}

const arr = [4, 2, 2, 8, 5, 1, 2, 4];
duplicateInArray(arr);
