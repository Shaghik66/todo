import "./ToDoInput.css";

export default function ToDoInput({ text, newText, addTodo }) {
  return (
    <div className="mainInputContainer">
      <input className="mainInput" value={text} type="text" onChange={newText} />
      <button className="inputButton" onClick={addTodo}>+</button>
    </div>
  );
}
