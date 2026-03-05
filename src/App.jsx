import { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput/ToDoInput";

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
    <header className="header">
      <div className="headerTitleContainer">
        <input className="titleInput" type="checkbox" />
        <h1 className="headerTitle">ToDo</h1>
      </div>
      <div className="inputContainer">
        <ToDoInput text={text} addTodo={addTodo} newText={newText} />
      </div>
      <div>
        <AddToDoContainer
          toDos={toDos}
          newToDos={newToDos}
          changeIsDone={changeIsDone}
          removeTodo={removeTodo}
        />
      </div>
    </header>
  );
}

export default App;
