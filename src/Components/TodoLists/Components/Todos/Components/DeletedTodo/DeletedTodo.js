import React from "react";
import "./DeletedTodo.css";
import PerTodo from "../PerTodo/PerTodo";

export default function DeletedTodo({
  deletedTodos,
  showDeletedTodo,
  showDeleted,
}) {
  const show = () => {
    return showDeleted();
  };

  return (
    <div className="deletedTodo">
      <div className="centeredDiv" >
        <div className="deletedTodoToggleButton" >
          <h4>Show Delete Todos Toggle Button:-</h4>
          <button className={`toggleButton ${showDeletedTodo?'greenBackground':'ccc6'} `} onClick={show}>
            <label htmlFor="" className={`slideBar ${showDeletedTodo?'moveRight':'moveLeft'}`}></label>
          </button>
        </div>
      </div>
      {showDeletedTodo ? (
        deletedTodos.length === 0 ? (
          < div className="topDownLoad" >
            <div className="constant">No Deleted Todos</div>
          </div>
        ) : (
          deletedTodos.map((v, i) => {
            return (
              <div className="topDownLoad" key={i}>
                <PerTodo todo={v} index={i} extraClass={"deletedTodos"} />
              </div>
            );
          })
        )
      ) : (
        null
      )}
    </div>
  );
}
