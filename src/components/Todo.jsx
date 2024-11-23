import { useSelector } from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <AddForm></AddForm>
      <h2>My Todo List App </h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </>
  );
}
