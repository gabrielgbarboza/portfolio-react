import gabriel from "../assets/img/gabriel.svg";
import st from "../assets/styles/Header.module.sass";

export default function Header() {
  const navItems = [
    {
      href: "#projetos",
      text: "Projetos",
    },
    {
      href: "#sobre",
      text: "Sobre",
    },
    {
      href: "#cursos",
      text: "Cursos",
    },
    {
      href: "#contato",
      text: "Contato",
    },
  ];
  return (
    <header className={st.appHeader}>
      <img src={gabriel} alt="" />
      <nav>
        <ul className={st.headerMenu}>
          {navItems.map(({ text, href }, index) => (
            <li key={index}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
