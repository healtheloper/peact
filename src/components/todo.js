import Button from "./button.js";

const Todo = ({ todo, onDelete }) => {
  const handleDeleteBtn = () => {
    onDelete(todo.id);
  };

  return `
    <li>
        <span>${todo.title} 번</span>
        ${Button({
          onClick: handleDeleteBtn,
          className: "deleteBtn",
          innerHTML: "삭제",
        })}
    </li>
  `;
};

export default Todo;
