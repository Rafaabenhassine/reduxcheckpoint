import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletetask, donetask, edittask } from "../JS/Actions/TaskActions";




const TaskCard = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [newName, setName] = useState("");
  const dispatch = useDispatch();
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "30px",
      }}
    >
      <p>{task.name}</p>
      {edit ? (
        <button
          onClick={() => (dispatch(edittask(task.id, newName)), setEdit(false))}
        >
          save
        </button>
      ) : (
        <button onClick={() => setEdit(true)}>edit</button>
      )}

      {edit ? (
        <input type="text" onChange={(e) => setName(e.target.value)} id="n" />
      ) : (
        <p></p>
      )}
      <Button onClick={() => dispatch(deletetask(task.id))}>Delete</Button>
      <Button
        onClick={() => dispatch(donetask(task.id))}
        variant={task.IsDone ? "success" : "danger"}
      >
        {" "}
        {task.IsDone ? <span>Make it unDone</span> : <span>Make it Done</span>}
      </Button>
    </div>
  );
};

export default TaskCard;



