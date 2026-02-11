import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";
import TodoContext from "../TodoProvider/TodoContext";
import { use } from "react";

export function ToDoItem({ item }) {
  const styles = ["todo-item"];

  if (item.completed) {
    styles.push("completed");
  }

  const { toggleTodoCompleted, deleteTodo, openFormTodoDialog } =
    use(TodoContext);

  return (
    <li className={styles.join(" ")}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleTodoCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => deleteTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => openFormTodoDialog(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
