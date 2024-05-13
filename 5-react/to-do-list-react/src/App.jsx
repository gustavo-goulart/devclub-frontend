function App() {
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
          <li>Compras</li>
          <li>Estudar</li>
          <li>Entregar Projeto</li>
        </ul>
      </div>
    </>
  );
}

export default App;
