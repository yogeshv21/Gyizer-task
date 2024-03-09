import React from "react";
import Styles from "./style.module.css";
import _ from "../../utils/_.module.css";

const Modal = ({ show, close, confirm }) => {
  if (show) {
    return (
      <div className={`${_["flex-center"]} ${Styles.modal_cont}`}>
        <div className={Styles.modal}>
          <div className={`${_["flex-center-column"]} ${Styles.cont}`}>
            <h2 className={`${_["h2"]}`}>Delete this task?</h2>
            <div className={`${_["flex-center"]} ${Styles.btn_cont}`}>
                <button onClick={confirm} className={`${_["container-style"]} ${Styles.btn}`}>Yes</button>
                <button onClick={close} className={`${_["container-style"]} ${Styles.btn}`}>No</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
