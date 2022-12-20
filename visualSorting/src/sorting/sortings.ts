export const bubbleSort = (
  arr: number[],
  setArr: (arr: number[]) => void,
  speed: number
) => {
  let i = 0;
  let j = 0;
  let timer = speed;
  const sort = () => {
    if (i < arr.length) {
      if (j < arr.length - i - 1) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArr([...arr]);
        }
        j++;
        setTimeout(sort, timer);
      } else {
        i++;
        j = 0;
        setTimeout(sort, timer);
      }
    }
  };
  sort();
};

export const selectionSort = (
  arr: number[],
  setArr: (arr: number[]) => void,
  speed: number
) => {
  console.log("selectionSort");
  let i = 0;
  let timer = speed;
  const sort = () => {
    if (i < arr.length) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      setArr([...arr]);
      i++;
      setTimeout(sort, timer);
    }
  };
  sort();
};

export const insertionSort = (
  arr: number[],
  setArr: (arr: number[]) => void,
  speed: number
) => {
  let i = 1;
  let j = arr.length - 1;
  let timer = speed;
  const sort = () => {
    if (i < arr.length) {
      if (j >= 0) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArr([...arr]);
        }
        j--;
        setTimeout(sort, timer);
      } else {
        i++;
        j = i - 1;
        setTimeout(sort, timer);
      }
    }
  };
  sort();
};

export const countingSort = (
  arr: number[],
  setArr: (arr: number[]) => void,
  speed: number
) => {
  let countArr: number[] = [];

  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i <= max; i++) {
    countArr[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] += 1;
  }

  for (let i = 1; i < countArr.length; i++) {
    countArr[i] += countArr[i - 1];
  }

  let sortedArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    sortedArr[i] = 0;
  }

  let i = 0;

  const sort = () => {
    if (countArr[arr[i]] >= 0) {
      sortedArr[countArr[arr[i]] - 1] = arr[i];

      countArr[arr[i]]--;

      setArr([...sortedArr]);
      i++;

      if (i < arr.length) {
        setTimeout(sort, speed);
      }
    }
  };
  sort();
};

interface arrProps {
  start: number;
  end: number;
}

export const mergeSort = (
  arr: number[],
  setArr: (arr: number[]) => void,
  speed: number
) => {
  const mergeAndSort = (leftArr: arrProps, rightArr: arrProps) => {
    let leftIndex = leftArr.start;
    let rightIndex = rightArr.start;

    let index = leftArr.start;

    const resultArr: number[] = [...arr];

    const sort = () => {
      if (leftIndex < leftArr.end && rightIndex < rightArr.end) {
        if (arr[leftIndex] < arr[rightIndex]) {
          resultArr[index] = arr[leftIndex];
          resultArr[index + 1] = arr[rightIndex];

          leftIndex++;
          rightIndex++;
          index += 2;
        } else {
          resultArr[index] = arr[rightIndex];
          resultArr[index + 1] = arr[leftIndex];

          leftIndex++;
          rightIndex++;
          index += 2;
        }

        arr = [...resultArr];
        setArr([...resultArr]);

        setTimeout(sort, speed);
      }
    };
    sort();
  };

  const spliter = () => {
    const spliterValue = Math.floor(arr.length / 2);

    for (let i = 1; i < spliterValue; i++) {
      let index = 0;
      const sort = () => {
        mergeAndSort(
          {
            start: index,
            end: index + i,
          },
          {
            start: index + i,
            end: index + i * 2,
          }
        );
        index += i * 2;
        if (index < arr.length) {
          setTimeout(sort, speed * i);
        }
      };
      sort();
    }
  };

  spliter();
};
