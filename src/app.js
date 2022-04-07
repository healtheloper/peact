import peact from "./peact.js";
import Todos from "./components/todos.js";
import Button from "./components/button.js";

const App = () => {
  const [name, setName] = peact.useState("파크");
  const [todos, setTodos] = peact.useState([]);

  const handleDeleteBtn = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const handleNameBtn = () => {
    const newName = name === "파크" ? "비비" : "파크";
    setName(newName);
  };

  peact.useEffect(() => {
    const fetchData = async () => {
      const newTodos = [
        {
          id: 1,
          title: "밥",
        },
        {
          id: 2,
          title: "커피",
        },
        {
          id: 3,
          title: "영화",
        },
      ];
      setTodos(newTodos);
    };
    fetchData();
  }, []);

  return `
    <h1>${name}</h1>
    ${Todos({ todos, onDelete: handleDeleteBtn })}
    ${Button({ className: "addBtn", onClick: handleAddBtn, innerHTML: "추가" })}
    ${Button({
      className: "nameBtn",
      onClick: handleNameBtn,
      innerHTML: "이름변경",
    })}
  `;
};

export default App;
