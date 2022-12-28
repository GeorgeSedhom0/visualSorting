interface value {
  value: number;
  color: string;
}

export const linierSearch = (
  arr: value[],
  setArr: (arr: value[]) => void,
  target: number,
  speed: number
) => {
  console.log("linier search", target, arr);

  // reset color

  for (let i = 0; i < arr.length; i++) {
    arr[i].color = "lightgray";
  }

  setArr([...arr]);

  let i = 0;
  const search = () => {
    if (i < arr.length) {
      if (arr[i].value === target) {
        arr[i].color = "green";
        setArr([...arr]);
      } else {
        arr[i].color = "red";
        setArr([...arr]);
      }
      i++;
      setTimeout(search, speed);
    }
  };

  search();
};
