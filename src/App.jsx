import { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput/Todoinput";
import AddToDoContainer from "./components/AddToDoContainer/AddToDoContainer";

function App() {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);

  const newText = (e) => {
    setText(e.target.value);
  };

  const newToDos = (e) => {
    setToDos(e.target.value);
  };

  const addTodo = () => {
    if (text.trim())
      setToDos((prev) => {
        return [...prev, { id: Date.now(), title: text, isDone: false }];
      });
    setText("");
  };

  const changeIsDone = (id) => {
    setToDos(
      toDos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      }),
    );
  };

  const removeTodo = (id) => {
    setToDos(
      toDos.filter((toDo) => {
        return toDo.id !== id;
      }),
    );
  };

  return (
    <header>
      <ToDoInput text={text} addTodo={addTodo} newText={newText} />

      <AddToDoContainer
        toDos={toDos}
        newToDos={newToDos}
        changeIsDone={changeIsDone}
        removeTodo={removeTodo}
      />
    </header>
  );
}

export default App;
