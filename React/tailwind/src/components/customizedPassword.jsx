import React, { useState, useCallback, useRef, useEffect } from "react";

function PasswordGenerator() {
  const [number, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [length, setLength] = useState(10);
  const [pass, setPass] = useState("");
  const [arraySize, setArraySize] = useState(0);
  const [customWords, setCustomWords] = useState([]);
  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";

    if (arraySize === 0) {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // total length: 52 (26+26)
      if (number) str += "1234567890";
      if (char) str += "`~!@#$%^&*()_{}|?/'";

      for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * str.length);
        password += str.charAt(random);
      }
    } else {
      let selectedWords = [];
      let remainingWords = [...customWords];

      for (let i = 0; i < arraySize; i++) {
        const randomIndex = Math.floor(Math.random() * remainingWords.length);
        const selectedWord = remainingWords[randomIndex];
        selectedWords.push(selectedWord);
        remainingWords.splice(randomIndex, 1);
      }

      password = selectedWords.join("");

      let additionalChars = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // total length: 52 (26+26)
      if (number) str += "1234567890";
      if (char) str += "`~!@#$%^&*()_{}|?/'";

      let remainingLength = Math.max(length - password.length, 0);

      for (let i = 0; i < remainingLength; i++) {
        let random = Math.floor(Math.random() * str.length);
        password += str.charAt(random);
      }
    }

    setPass(password);
  }, [length, number, char, customWords, arraySize]);

  useEffect(() => {
    generatePassword();
  }, [number, length, char, generatePassword, arraySize]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, pass.length);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  const handleWordChange = (index, value) => {
    setCustomWords((prevWords) => {
      const newWords = [...prevWords];
      newWords[index] = value;
      return newWords;
    });
  };

  const handleWordBlur = (index, value) => {
    if (!value.trim()) {
      setCustomWords((prevWords) => {
        const newWords = [...prevWords];
        newWords.splice(index, 1);
        return newWords;
      });
    }
  };

  return (
    <>
      <h1
        style={{ color: "#5B4137 ", fontSize: "40px" }}
        class="relative  text-center w-full   flex-none mb-2 pt-10 pb-5  text-2xl font-semibold text-white"
      >
        Pass-Craft
      </h1>
      <div>
        <label style={{ color: "#5B4137", fontSize: "20px" }}>Password </label>{" "}
        <br />
        <input
          value={pass}
          type="text"
          readOnly
          ref={passRef}
          style={{
            backgroundColor: "#8c7a73",
            color: "white",
            margin: "10px",
            width: "700px",
            padding: "10px",
            borderRadius: "5px",
          }}
        />
        <button
          style={{
            backgroundColor: "#8c7a73",
            color: "white",
            margin: "10px",
            width: "80px",
            padding: "10px",
            borderRadius: "5px",
          }}
          onClick={copyPassword}
        >
          Copy
        </button>
        <br />
        <input
          min={6}
          max={60}
          type="range"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          style={{ marginRight: "10px" }}
        />
        <label style={{ marginRight: "10px", color: "#5B4137" }}>
          Length ({length})
        </label>
        <input type="checkbox" onChange={() => setNum((prev) => !prev)} />
        <label style={{ marginRight: "10px", color: "#5B4137" }}>Numbers</label>
        <input type="checkbox" onChange={() => setChar((prev) => !prev)} />
        <label style={{ marginRight: "10px", color: "#5B4137" }}>
          Characters
        </label>
        <br />
        <label style={{ marginRight: "10px", color: "#5B4137" }}>
          Array Size:{" "}
        </label>
        <input
          type="number"
          value={arraySize}
          onChange={(e) => {
            setArraySize(Number(e.target.value));
            setCustomWords(Array(Number(e.target.value)).fill(""));
          }}
          style={{
            margin: "10px",
            padding: "5px",
            color: "#5B4137",
          }}
        />
        <br />
        {Array.from({ length: arraySize }).map((_, index) => (
          <div key={index}>
            <input
              type="text"
              value={customWords[index] || ""}
              onChange={(e) => handleWordChange(index, e.target.value)}
              onBlur={(e) => handleWordBlur(index, e.target.value)}
              style={{
                margin: "10px",
                padding: "5px",
                color: "#5B4137",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default PasswordGenerator;
