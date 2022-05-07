import React from "react";
import "./PerTodo.css";
import deleteIcon from "./delete.png";

export default function PerTodo({ todo, index, removeTodo, extraClass }) {
  const handleTodoDelete = () => {
    removeTodo(todo);
  };
  return (
    <div className={`todo ${extraClass}`}>
      <div className="todoHolder">
        <div className="index">{index + 1}.</div>
        <div className="todoTitleAndDateHolder">
          <div className="todoTitle">{ todo.title}</div>
          <div className="todoDate">{todo.date}</div>
        </div>
        <div onClick={handleTodoDelete} className="deleteTodo">
          <img src={deleteIcon} width="40px" alt="deleteIcon" />
        </div>
      </div>
    </div>
  );
}
