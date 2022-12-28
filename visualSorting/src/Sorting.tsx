import { useState } from "react";
import "./App.css";
import {
  bubbleSort,
  insertionSort,
  selectionSort,
  countingSort,
  mergeSort,
} from "./sorting/sortings";

const Sorting = () => {
  const [arr, setArr] = useState([0]);
  const [speed, setSpeed] = useState(5);
  // create array with random values

  const createArray = (length: number) => {
    const newArr: number[] = [];
    for (let i = 0; i < length; i++) {
      newArr.push(Math.floor(Math.random() * length));
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
            height: `${(value / arr.length) * 300}px`,
            width: `${100 / arr.length}%`,
            backgroundColor: "lightgray",
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
        <button onClick={() => bubbleSort(arr, setArr, speed)}>
          Bubble Sort
        </button>
        <button onClick={() => insertionSort(arr, setArr, speed)}>
          Insertion Sort
        </button>
        <button onClick={() => selectionSort(arr, setArr, speed)}>
          Selection Sort
        </button>
        <button onClick={() => countingSort(arr, setArr, speed)}>
          Counting Sort
        </button>
        <button onClick={() => mergeSort(arr, setArr, speed)}>
          Merge Sort
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

export default Sorting;
