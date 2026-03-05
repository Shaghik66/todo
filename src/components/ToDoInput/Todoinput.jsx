import "./Todoinput.css";

export default function ToDoInput({ text, newText, addTodo }) {
  return (
    <div>
      <input value={text} type="text" onChange={newText} />
      <button onClick={addTodo}>➕</button>
    </div>
  );
}
