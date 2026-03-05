import "./AddToDoContainer.css";

export default function AddToDoContainer({ toDos, changeIsDone, removeTodo }) {
  return (
    <div className="container">
    <ul className="listContainer">
      {toDos.map((toDo) => {
        return (
          <li key={toDo.id} className="list">
            <input
            className="mainCheckbox"
              type="checkbox"
              checked={toDo.isDone}
              onChange={() => changeIsDone(toDo.id)}
            />
            <p className="
            todoParagraph">{toDo.title}</p>
            <button
            className="toDoRemoveButton"
              onClick={() => {
                removeTodo(toDo.id);
              }}

            >
              X
            </button>
          </li>
        );
      })}
    </ul>
    </div>
  );
}
