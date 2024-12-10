import gabriel from "../../src/img/gabriel.svg";
import st from "../../src/styles/Header.module.sass";

export default function Header() {
  return (
    <header className={st.appHeader}>
      <img src={gabriel} alt="" />
      <nav>
        <ul className={st.headerMenu}>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#cursos">Cursos</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
