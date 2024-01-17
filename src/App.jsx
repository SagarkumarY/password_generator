import "./App.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input.jsx";
import Alert from "./components/Alert.jsx";
import { useAlert } from "./components/context/AlertContext.jsx";

function App() {
  const initialColor = localStorage.getItem("backgroundColor") || "purple";
  const [color, setColor] = useState(initialColor);
  const { showAlert } = useAlert();

  useEffect(() => {
    // Update local storage whenever the color changes
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    showAlert("success", `Color changed to ${newColor}`);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <Alert />
      <Input></Input>

      <div className="fixed flex flex-wrap justify-center gap-2 bottom-12 inset-x-0 px-2">
        <button
          onClick={() => handleColorChange("blue")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Blue
        </button>
        <button
          onClick={() => handleColorChange("green")}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Green
        </button>
        <button
          onClick={() => handleColorChange("red")}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Red
        </button>
        <button
          onClick={() => handleColorChange("yellow")}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Yellow
        </button>
        <button
          onClick={() => handleColorChange("purple")}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Purple
        </button>
        <button
          onClick={() => handleColorChange("orange")}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Orange
        </button>
        <button
          onClick={() => handleColorChange("pink")}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Pink
        </button>
        <button
          onClick={() => handleColorChange("black")}
          className="bg-black text-white hover:bg-gray-800 font-bold py-2 px-4 rounded"
        >
          Black
        </button>
        <button
          onClick={() => handleColorChange("white")}
          className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded"
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;
