import React, { useState } from "react";
import Styles from "./style.module.css";
import _ from "./../../utils/_.module.css";
import Button from "../Button/Button";
import { AddIcon, DeleteIcon, EditIcon } from "../../assets/icons";

const TaskCard = ({data, setEdit, setIsEdit, removeTask}) => {
  const [otherBtns, setOtherBtns] = useState(false);

  const editTaskHandler=(v)=>{
    setEdit(v);
    setIsEdit(true)
  }

  const otherBtnsHandler = ()=>{
    setOtherBtns(false)
    setIsEdit(false)
    setEdit({
        title: "",
        task: "",
      })
  }

  const removeTaskHandler = (id)=>{
    removeTask(id)
    setOtherBtns(false)
  }

  return (
    <div
      className={`${_["container-style"]} ${_["flex-center"]} ${Styles.card}`}
    >
      <div className={`${Styles.txt}`}>
        <h3 className={`${_["h3"]}`}>
          {data?.title}
        </h3>
        <p className={`${_["p"]}`}>
        {data?.task}
        </p>
      </div>
      <div className={`${Styles.btns_container}`}>
        {!otherBtns ? (
          <Button onClick={()=>setOtherBtns(true)} size={"small"}>i</Button>
        ) : (
          <>
            <Button onClick={()=>editTaskHandler(data)} size={"small"}><EditIcon/></Button>
            <Button onClick={()=>removeTaskHandler(data.id)} size={"small"}><DeleteIcon/></Button>
            <Button onClick={()=>otherBtnsHandler()} size={"small"}><AddIcon className={Styles.cross}/></Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
