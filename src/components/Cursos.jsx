import st from '../assets/styles/Projetos.module.sass';
import cn from 'classnames';
import ContentCard from './ContentCard.jsx';
import imagemTeste from '../assets/img/cardTeste.png';

const cursosCards = [
  {
    type: 'Curso',
    tipo: 'Alura',
    imagem: imagemTeste,
    titutlo: 'Promotional landing page for our favorite show',
    detalhe:
      'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
    ano: '2023',
    area: 'Front end Developer',
    ver: 'Live demo',
    github: 'See on gitHub',
  },
];

export default function Cursos() {
  return (
    <section id='cursos' className={cn('container')} aria-label='Cursos'>
      <header className={st.cardsIntroducao}>
        <h2 className='title medium-size'>Cursos e cetificações</h2>
        <p className='text'>
          {' '}
          Aqui estão alguns dos cursos realizados que demonstram experiência com
          desenvolvimento front-end.{' '}
        </p>
      </header>
      <ContentCard items={cursosCards} />
    </section>
  );
}
