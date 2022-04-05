const Todos = ({ todos }) => {
  return `<ul>${todos.map((todo) => `<li>${todo} 번</li>`).join("")}</ul>`;
};

export default Todos;
