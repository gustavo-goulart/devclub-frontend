import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function clicarNoBotao() {
    setList([...list, { id: uuid(), task: inputTask }]);
  }

  return (
    <>
      <div>
        <input onChange={inputMudou} placeholder="Digite uma tarefa..." />
        <button onClick={clicarNoBotao}>Adicionar</button>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
