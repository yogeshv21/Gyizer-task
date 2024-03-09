import React, { useEffect, useState } from "react";
import Styles from "./style.module.css";
import { NavBar, InputField, Button, TaskCard, Modal } from "../../components";
import _ from "../../utils/_.module.css";
import { AddIcon } from "../../assets/icons";
import {
  getDataFromStorage,
  setDataToStorage,
} from "../../services/todolist.services";

const Landing = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    task: "",
  });

  const [isEdit, setIsEdit] = useState(false);

  const [taskList, setTaskList] = useState([]);

  const [modal, setModal] = useState(false)

  const addTaskHandler = (value) => {
    if (value.title === "" || value.task === "") {
      alert("Please fill out all fields.");
      return;
    }
    const prevData = getDataFromStorage();
    if (prevData) {
      const data = [...prevData, { ...value, id: Math.random() }];
      setDataToStorage(data);
    } else {
      setDataToStorage([{ ...value, id: Math.random() }]);
    }
    setInputValue({
      title: "",
      task: "",
    });
    getTasksHandler();
  };

  const getTasksHandler = () => {
    const data = getDataFromStorage();
    setTaskList(data);
  };

  const editTaskHandler = (v) => {
    setInputValue(v);
  };

  const updateHandler = (inputValue) => {
    const updatedData = [...taskList];
    const idToUpdate = inputValue?.id;
    const index = updatedData.findIndex((item) => item.id === idToUpdate);

    if (index !== -1) {
      updatedData[index] = {
        ...updatedData[index],
        title: inputValue.title,
        task: inputValue.task,
      };

      setDataToStorage(updatedData);
      getTasksHandler();
      setInputValue({
        title: "",
        task: "",
      });
      setIsEdit(false);
    } else {
      console.log("Object with specified id not found");
    }
  };

  const removeTaskHandler = (id) => {
    const updatedData = taskList.filter((item) => item.id !== id);
    setDataToStorage(updatedData);
    getTasksHandler();
    setModal(false)
  };

  const openModalHandler = (id)=>{
    setModal(id)
  }

  useEffect(() => {
    getTasksHandler();
  }, []);

  return (
    <>
      <NavBar />
      <Modal show={modal} close={()=>setModal(false)} confirm={()=>removeTaskHandler(modal)}/>
      <div
        className={`${_["body-padding"]} ${_["flex-center-column"]} ${Styles.main_cont}`}
      >
        <div className={`${_["flex-center"]} ${Styles.task_add_wraper}`}>
          <div
            className={`${_["flex-center-column"]} ${Styles.InputField_cont}`}
          >
            <InputField
              width={"100%"}
              value={inputValue.title}
              setValue={(v) =>
                setInputValue({
                  ...inputValue,
                  title: v,
                })
              }
            />
            <InputField
              width={"100%"}
              value={inputValue.task}
              setValue={(v) =>
                setInputValue({
                  ...inputValue,
                  task: v,
                })
              }
              type={"textArea"}
              placeholder="Input..."
            />
          </div>
          <Button
            onClick={() => {
              if (!isEdit) {
                addTaskHandler(inputValue);
              } else {
                updateHandler(inputValue);
              }
            }}
            size={"large"}
          >
            {isEdit ? "Update" : <AddIcon />}
          </Button>
        </div>
        <div className={`${_["container-style"]} ${Styles.tasks_cont}`}>
          {taskList?.length > 0?
            taskList?.map((item, i) => (
              <TaskCard
                key={i}
                data={item}
                setEdit={editTaskHandler}
                setIsEdit={setIsEdit}
                removeTask={openModalHandler}
              />
            )):<div className={`${_["flex-center-column"]} ${Styles.notask_cont}`}>
            <div className={Styles.divider}></div>
            <h2 className={`${_["h2"]}`}>No Tasks</h2>
            <div className={Styles.divider}></div>
          </div>}
        </div>
      </div>
    </>
  );
};

export default Landing;
