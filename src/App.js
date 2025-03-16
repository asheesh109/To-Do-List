import { useState } from 'react';
import "./components/styles.css";

function App() {
  let [arr, setArr] = useState([]);
  let [task, setTask] = useState("");

  function daalo(event) {
    event.preventDefault();
    if (task) {
      setArr([...arr, task]);
      setTask("");
    }
  }

  function nikalo(index) {
    setArr(arr.filter((ele, i) => i !== index));
  }

  return (
    <div className='container'>
      <h2>To-do List</h2>
      <form onSubmit={daalo}>
        <input 
          type='text' 
          placeholder='Enter a task' 
          onChange={(event) => setTask(event.target.value)} 
          value={task}
        />
        <button className='add-btn'>Add Task</button>
      </form>
      <div className='bottom'>
        {arr.length === 0 ? <p>No tasks added yet.</p> : arr.map((element, index) => (
          <div className='card' key={index}>
            <span>{element}</span>
            <button onClick={() => nikalo(index)} className='delete-btn'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
