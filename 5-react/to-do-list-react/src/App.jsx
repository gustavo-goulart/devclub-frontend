function App() {
  const list = [
    { id: 25845, task: "Compras" },
    { id: 15478, task: "Entregar Projeto" },
    { id: 14577, task: "Estudar" },
  ];

  //"Compras", "Entregar Projeto", "Estudar"

  function inputMudou(event) {
    console.log(event.target.value);
  }

  function clicarNoBotao() {
    console.log("Cliquei no botão");
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
