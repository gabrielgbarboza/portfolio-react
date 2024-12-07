import "./global.sass";
import st from "./styles/teste.module.sass";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="teste">
          <h1 className={st.teste}>Título</h1>
        </div>
        <ul className={st.segundoTeste}>
          <li>um</li>
          <li>dois</li>
          <li>tres</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
