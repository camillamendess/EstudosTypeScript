import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';

interface Task {
  id: string;
  isCompleted: boolean;
}

function App() {
  // Tipando UseState
  const [tasks, setTasks] = useState<Task[]>([]);
  const [count, setCount] = useState<number>(1);

  setCount(1);

  // UseMemo
  const completedTasks: boolean[] = useMemo(() => {
    return tasks
      .filter((task) => task.isCompleted)
      .map((task) => task.isCompleted);
  }, [tasks]);

  
  // UseCallback
  const handleButtonClick: () => void = useCallback(() => {
    return console.log("COCA");
  }, []);
  
  console.log(completedTasks, handleButtonClick);

  return (
    
    <div className="App">
      <header className="App-header">
        <Button onClick={() => console.log("Clicado")} >Enviar</Button>

        <TextField onChange={e => e.target.value} />
      </header>
    </div>
  );
}

export default App;
