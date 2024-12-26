import './assets/styles/global.sass';
import Header from './components/Header.jsx';
import Introducao from './components/Introducao.jsx';
import Projetos from './components/Projetos.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Introducao />
        <Projetos />
      </main>
    </div>
  );
}

export default App;
