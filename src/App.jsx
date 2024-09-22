import React, { useState } from 'react';
import './index.css';
import Card from './components/Card';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  function funcBtn(event) {
    event.preventDefault();

    const user = {
      text: input,
      id: Date.now(),
    };

    if (input.trim() === '') {
      return setInput('');
    }

    setTasks([...tasks, user]);
    setInput('');
  }

  function funcDeleteCard(id) {
    const deleteCoped = tasks.filter((value) => value.id !== id);
    setTasks(deleteCoped);
  }

  return (
    <div className="container mx-auto p-4 border rounded max-w-96 w-full mt-8">
      <div className="mb-4 flex gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter a new task"
          className="border border-gray-400 rounded p-2 w-full"
        />
        <button
          onClick={funcBtn}
          className=" bg-violet-700 text-white p-1 px-5 text-xl rounded-lg  hover:bg-violet-800 transition">+</button>
      </div>
      <h3 className="text-lg font-semibold mb-2">Tasks to do - {tasks.length}</h3>

      <div className="wrapper space-y-2  justify-center gap-2">
        {tasks.length > 0 &&
          tasks.map((value) => (
            <Card
              funcDeleteCard={() => funcDeleteCard(value.id)}
              text={value.text}
              key={value.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
