import React, { useState } from "react";
import "./Todos.css";
import PerTodo from "./Components/PerTodo/PerTodo";
import DeletedTodo from "./Components/DeletedTodo/DeletedTodo";
import ScrollableFeed from "react-scrollable-feed";

export default function Todos({ todos, deletedTodos, removeTodo }) {
  const [showDeletedTodo, setShowDeletedTodo] = useState(false);

  const showDeleted = () => {
    setShowDeletedTodo(!showDeletedTodo);
  };

  return (
    <div id="todoHolder" className="todos">
      <div className="deleteSection">

        {/* AUTO SCROLL TO BOTTOM ON CONDITION WHEN THE LAST VIEW IS ON BOTTOM */}
        <ScrollableFeed>
          <DeletedTodo
            deletedTodos={deletedTodos}
            showDeletedTodo={showDeletedTodo}
            showDeleted={showDeleted}
          />
          <div className="notDeleted" id="ScrollBottom">

            {/* CONDITIONAL RENDERING */}
            {todos.length === 0 ? (
              <div className="neutral">No todos to display</div>
            ) : (
              todos.map((v, i) => {
                return (
                  <PerTodo
                    key={i}
                    todo={v}
                    index={i}
                    removeTodo={removeTodo}
                    extraClass={""}
                  />
                );
              })
            )}
          </div>
        </ScrollableFeed>
      </div>
    </div>
  );
}
