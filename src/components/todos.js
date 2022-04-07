import Todo from "./todo.js";

const Todos = ({ todos, onDelete }) => {
  return `
    <ul>
      ${todos.map((todo) => Todo({ todo, onDelete })).join("")}
    </ul>`;
};

export default Todos;
