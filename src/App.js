import { useCallback, useReducer, useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
// import { MarqueeExample } from "./components/EnactCompnets";


function createBulkTodos(){
  const array = [];
  for (let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }

  return array
};

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  };
    
  
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      // setTodos(todos => todos.concat(todo));
      dispatch({type: 'INSERT', todo})
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    id => {
      // setTodos(todos => todos.filter(todo => id !== todo.id));
      dispatch({type:'REMOVE', id})
    },
    []
  );

  const onToggle = useCallback(
    id => {
      // setTodos( todos =>
      //   todos.map(todo =>
      //     todo.id === id ? { ... todo, checked: !todo.checked} : todo,
      //   ),
      // )
      dispatch({type: 'TOGGLE', id})
    },
    []
  )

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
      {/* <MarqueeExample/> */}
    </div>
  );
}

export default App;
