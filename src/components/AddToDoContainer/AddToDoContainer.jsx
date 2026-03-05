import "./AddToDoContainer.css";

export default function AddToDoContainer({ toDos, changeIsDone, removeTodo }) {
  return (
    <div>
      {toDos.map((toDo) => {
        return (
          <li key={toDo.id}>
            <input
              type="checkbox"
              checked={toDo.isDone}
              onChange={() => changeIsDone(toDo.id)}
            />
            <span>{toDo.title}</span>
            <button
              onClick={() => {
                removeTodo(toDo.id);
              }}
            >
              ✖️
            </button>
          </li>
        );
      })}
    </div>
  );
}
