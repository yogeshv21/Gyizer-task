import React, { useState } from "react";
import Styles from "./style.module.css";
import _ from "../../utils/_.module.css";

const InputField = ({
  type,
  placeholder = "Title...",
  value,
  setValue = () => {},
  width,
}) => {

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    setValue(event.target.value);
  };

  const calculateTextAreaHeight = () => {
    const lineHeightRem = 2;
    const lines = text.split('\n').length;
    return `${lineHeightRem * lines}rem`;
  };

  return (
    <div
      className={`${_["container-style"]} ${Styles.inp_cont}`}
      style={{ width: width }}
    >
      {type === "textArea" ? (
        <textarea
          rows="1"
          placeholder={placeholder}
          className={Styles.inp}
          style={{ height: calculateTextAreaHeight() }}
          onChange={handleChange}
          value={value}
        />
      ) : (
        <input
          type="text"
          className={Styles.inp}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default InputField;
