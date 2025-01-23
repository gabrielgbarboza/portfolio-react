import gabriel from '../assets/img/gabriel.svg';
import st from '../assets/styles/Header.module.sass';
import { useState } from 'react';
import cn from 'classnames';

export default function Header() {
  const navItems = [
    {
      href: '#sobre',
      text: 'Sobre',
    },
    {
      href: '#projetos',
      text: 'Projetos',
    },
    {
      href: '#cursos',
      text: 'Cursos',
    },
    {
      href: '#contato',
      text: 'Contato',
    },
  ];

  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <header className={st.headerContainer}>
      <a href='#home'>
        <img className={cn(st.logoGabriel)} src={gabriel} alt='Gabriel' />
      </a>
      <button
        className={st.headerBotao}
        onClick={() => setMenuMobile(!menuMobile)}
      ></button>
      <nav id='nav' aria-label='Menu Principal'>
        <ul className={cn(st.headerMenu, menuMobile && st.active)}>
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
