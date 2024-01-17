import React, { useCallback, useEffect, useState ,useRef} from "react";
import "../App.css";
import { useAlert } from "./context/AlertContext";

function Input() {
  const { showAlert } = useAlert();

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "01234567890";
    if (charAllowed) str += "!@#$%&'()*+,-./";
    for (let i = 1; i < length; i++) {
      //   pass += str.charAt(Math.floor(Math.random() * str.length + 1));
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerater();
  }, [length, numberAllowed, charAllowed]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
    showAlert("success", "Password copied to clipboard!");
  }, [password, showAlert]);
                                
   return (
    <div>
      <h1 className="text-4xl text-center text-white">Password generator</h1>
      <div className="flex flex-col items-center justify-center my-5 ">
        <div className="flex items-center space-x-4 mb-8">
          <input
            type="text"
            value={password}
            className="border border-gray-300 px-4 py-2 rounded"
            placeholder="Passwords"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={copyToClipboard}
          >
            {" "}
            Copy
          </button>
        </div>

        {/* <!-- Second Line: Range Input and Checkboxes --> */}
        <div className="flex items-center space-x-4">
          <input
            type="range"
            className="w-64 cursor-pointer"
            min="6"
            max="100"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length: {length}</label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            Numbers
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            Charaters
          </label>
        </div>
      </div>
    </div>
  );
}

export default Input;
