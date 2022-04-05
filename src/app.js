import peact from "./peact.js";
import Todos from "./components/todos.js";
import Button from "./components/button.js";

const App = () => {
  const [todos, setTodos] = peact.useState([1, 2, 3]);

  const handleBtn = () => {
    const newTodo = todos[todos.length - 1] + 1;
    setTodos([...todos, newTodo]);
  };

  return `
    ${Todos({ todos })}
    ${Button({ className: "addBtn", onClick: handleBtn, innerHTML: "추가" })}
  `;
};

export default App;
