import "./global.sass";
import Header from "./components/Header.jsx";
import Introducao from "./components/Introducao.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introducao />
      </main>
    </div>
  );
}

export default App;
