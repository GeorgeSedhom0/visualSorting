import { useState } from "react";
import { linierSearch } from "./sorting/searching";

interface value {
  value: number;
  color: string;
}
const Search = () => {
  const [arr, setArr] = useState([{ value: 0, color: "lightgray" }]);
  const [speed, setSpeed] = useState(5);
  const [target, setTarget] = useState(-1);
  // create array with random values

  const createArray = (length: number) => {
    const newArr: value[] = [];
    for (let i = 0; i < length; i++) {
      const value = {
        value: Math.floor(Math.random() * length),
        color: "lightgray",
      };
      newArr.push(value);
    }
    setArr(newArr);
  };

  const shuffle = () => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    setArr(newArr);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100%",
        width: "100vw",
        margin: "0",
        padding: "0",
        // gap: "1px",
      }}
    >
      {/* create colums from the array arr with height from the value*/}
      {arr.map((value, index) => (
        <div
          key={index}
          style={{
            height: `${(value.value / arr.length) * 300}px`,
            width: `${100 / arr.length}%`,
            backgroundColor: value.color,
            // border: "1px solid white",
          }}
        />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gap: "10px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="number"
          value={target}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value > -10) {
              setTarget(value);
            }
          }}
        />
        <button
          onClick={() => {
            linierSearch(arr, setArr, target, speed);
          }}
        >
          Find
        </button>
        <button onClick={shuffle}>Shuffle</button>
        amount
        <input
          type="number"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value > 0) {
              createArray(value);
            }
          }}
        />
        timer
        <input
          type="number"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value > 0) {
              setSpeed(value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Search;
