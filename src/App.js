import { useCallback, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

function App() {

  const createBulkTodos = () => {
    const array = [];
    for (let i = 1; i <= 2500; i++){
      array.push({
        id: i,
        text: `할 일 ${i}`,
        checked: false
      })
    }

    return array
  }

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => id !== todo.id));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ... todo, checked: !todo.checked} : todo,
        ),
      )
    },
    [todos]
  )

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>

    </div>
  );
}

export default App;
