import { useState } from "react";
import checkIcon from "/checked.svg";
import trashIcon from "/trashIcon.svg";
import uncheckedIcon from "/unchecked.svg";

/*=================== App Render =================== */

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { text: todoText, id: Date.now(), completed: false }]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleCompleted = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="form-bg">
      <h1>Todo List</h1>
      <Form addTodo={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

/*=================== Forms =================== */

function Form({ addTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddClick = () => {
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };

  return (
    <>
      <input
        className="formw"
        type="text"
        name="todo"
        id="todo"
        placeholder=""
        value={todoText}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddClick} />
    </>
  );
}

/*=================== Todo =================== */

function Todo({ todos, removeTodo, toggleCompleted }) {
  return (
    <div>
      <List
        todos={todos}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}

/*=================== Lists =================== */

function List({ todos, removeTodo, toggleCompleted }) {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className={todo.completed ? "completed" : ""}>
          <label onClick={() => toggleCompleted(todo.id)}>
            <CheckI checked={todo.completed} />
            <span className="spantext">{todo.text}</span>
            <TrashI onClick={() => removeTodo(todo.id)} />
          </label>
        </div>
      ))}
    </>
  );
}

/*=================== Buttons =================== */

function Button({ onClick }) {
  return <button onClick={onClick}>Add</button>;
}

/*=================== Icons =================== */

function CheckI({ checked }) {
  return (
    <img
      className="checked"
      src={checked ? checkIcon : uncheckedIcon}
      alt="CheckIcon"
    />
  );
}

function TrashI({ onClick }) {
  return (
    <img className="trash" src={trashIcon} alt="TrashIcon" onClick={onClick} />
  );
}

export default App;
