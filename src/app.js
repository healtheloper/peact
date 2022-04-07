import peact from "./peact.js";
import Todos from "./components/todos.js";
import Button from "./components/button.js";
import { request } from "./request.js";

const App = () => {
  const [name, setName] = peact.useState("파크");
  const [todos, setTodos] = peact.useState([]);
  const handleAddBtn = () => {
    // setRenderFlag(!renderFlag);
  };

  const handleDeleteBtn = (todoId) => {
    console.log(todoId);
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const handleNameBtn = () => {
    const newName = name === "파크" ? "비비" : "파크";
    setName(newName);
  };

  peact.useEffect(() => {
    console.log("마운트 혹은 업데이트");
    const fetchData = async () => {
      // const newTodos = await request({
      //   url: "",
      //   options: {
      //     method: "GET",
      //   },
      // });
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
  console.log("렌더", todos);
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
