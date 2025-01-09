import './assets/styles/global.sass';
import Header from './components/Header.jsx';
import Introducao from './components/Introducao.jsx';
import Projetos from './components/Projetos.jsx';
import Cursos from './components/Cursos.jsx';
import SobreMim from './components/Sobre.jsx';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Introducao />
        <Projetos />
        <Cursos />
        <SobreMim />
      </main>
    </div>
  );
}

export default App;
