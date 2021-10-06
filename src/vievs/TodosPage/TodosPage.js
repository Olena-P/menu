import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Title, List, Item, ItemTitle } from "./TodosPage.styled";

export default function TodosPage(todo) {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((todos) => console.log(todos))
      .then((data) => {
        history.push("/todos");
        setTodos(data.results);
      })
      .catch((error) => setError(error));
  }, [history]);

  return (
    <>
      {todos && (
        <>
          <Title>Todos</Title>
          <List>
            {todos.map((todo) => (
              <Item key={todo.id}>
                <ItemTitle>UserId: {todo.userId}</ItemTitle>
                <ItemTitle>Title: {todo.title}</ItemTitle>
                <ItemTitle>Completed: {todo.completed}</ItemTitle>
              </Item>
            ))}
          </List>
        </>
      )}
    </>
  );
}
