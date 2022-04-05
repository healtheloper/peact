import peact from "./peact.js";
import Todos from "./components/todos.js";
import Button from "./components/button.js";

const App = () => {
  const [name, setName] = peact.useState("파크");
  const [todos, setTodos] = peact.useState([1, 2, 3]);

  const handleAddBtn = () => {
    const newTodo = todos[todos.length - 1] + 1;
    setTodos([...todos, newTodo]);
  };

  const handleNameBtn = () => {
    const newName = name === "파크" ? "비비" : "파크";
    setName(newName);
  };

  peact.useEffect(() => {
    console.log("유즈이펙트");
  }, [todos, name]);

  return `
    <h1>${name}</h1>
    ${Todos({ todos })}
    ${Button({ className: "addBtn", onClick: handleAddBtn, innerHTML: "추가" })}
    ${Button({
      className: "nameBtn",
      onClick: handleNameBtn,
      innerHTML: "이름변경",
    })}
  `;
};

export default App;
