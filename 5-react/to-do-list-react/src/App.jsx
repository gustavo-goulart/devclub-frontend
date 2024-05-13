import { useState } from "react";
import { v4 as uuid } from "uuid";

import { FcEmptyTrash, FcOk } from "react-icons/fc";

import { Container, ToDoList, Input, Button } from "./styles.js";

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
      <Container>
        <ToDoList>
          <Input onChange={inputMudou} placeholder="Digite uma tarefa..." />
          <Button onClick={clicarNoBotao}>Adicionar</Button>
          <ul>
            {list.map((item) => (
              <div>
                <FcOk />
                <li key={item.id}>{item.task}</li>
                <FcEmptyTrash />
              </div>
            ))}
          </ul>
        </ToDoList>
      </Container>
    </>
  );
}

export default App;
