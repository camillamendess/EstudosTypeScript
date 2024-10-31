import { useState } from 'react';
import './App.css';
import Button from './components/Button';

interface Task {
  id: string;
  isCompleted: boolean;
}

function App() {
  // Tipando UseState
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(1);

  setCount(1);

  return (
    
    <div className="App">
      <header className="App-header">
        <Button onClick={() => console.log("Clicado")} >Enviar</Button>
      </header>
    </div>
  );
}

export default App;
