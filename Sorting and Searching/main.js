const permut = (arr, a, b) => {
    let x = arr[a];
    arr[a] = arr[b];
    arr[b] = x;
  };
  const bubbleSort = (arr) => {
    let cpt = 0;
    do {
      cpt = 0;
      for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          permut(arr, i, i + 1);
          cpt++;
        }
      }
    } while (cpt != 0);
    return arr;
  };
  console.log(bubbleSort([5, 2, 8, 4, 9, 1]));