import { useState } from "react";
import { v4 as uuid } from "uuid";

import { FcCheckmark, FcEmptyTrash, FcOk } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from "./styles.js";

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "Nada", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function clicarNoBotao() {
    setList([...list, { id: uuid(), task: inputTask, finished: false }]);
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  return (
    <>
      <Container>
        <ToDoList>
          <Input onChange={inputMudou} placeholder="Digite uma tarefa..." />
          <Button onClick={clicarNoBotao}>Adicionar</Button>
          <ul>
            {list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <FcCheckmark onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <FcEmptyTrash />
              </ListItem>
            ))}
          </ul>
        </ToDoList>
      </Container>
    </>
  );
}

export default App;
