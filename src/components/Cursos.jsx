import st from '../assets/styles/ProjetosECursos.module.sass';
import cn from 'classnames';
import ContentCard from './ContentCard.jsx';
import cursoCongenial from '../assets/img/Cursos-C++.jpg';
import cursoinitProgramacao from '../assets/img/Cursos-InicianteEmProgramação.png';
import cursoGitGithub from '../assets/img/Cursos-GitGithub.png';

const cursosCards = [
  {
    type: 'Curso',
    tipo: 'Escola Congenial',
    imagem: cursoCongenial,
    titutlo: 'Lógica de Programação em C++ (90h)',
    detalhe:
      'Curso focado no aprendizado da linguagem C++ e na resolução de desafios lógicos. Durante o curso, aprendi comandos de entrada e saída (input and output), expressões aritméticas e lógicas (and, or, not), desvios condicionais (if and else), laços de repetição (while and for), arrays, funções e structs. Cada sessão do curso apresenta desafios com diferentes níveis de dificuldade para testar os conhecimentos adquiridos.',
    ano: '2024',
    area: 'Programming Logic / C++',
    ver: 'Live demo',
    github: 'See on gitHub',
  },
  {
    type: 'Curso',
    tipo: 'Alura',
    imagem: cursoinitProgramacao,
    titutlo: 'Iniciante em Programação (31h)',
    detalhe:
      'Neste curso, aprendi mais sobre lógica de programação e as linguagens mais usadas no desenvolvimento de software. A formação também abrangeu desde a criação e análise de problemas computacionais até a manipulação do Git e GitHub para hospedagem e colaboração de projetos. Foi ideal para o início da minha transição de carreira, auxiliando a entender melhor as áreas da área de tecnologia e ajudando na compreensão e comunicação com a área de desenvolvimento.',
    ano: '2024',
    area: 'Programming Logic / JavaScript',
    ver: 'Live demo',
    github: 'See on gitHub',
  },
  {
    type: 'Curso',
    tipo: 'Alura',
    imagem: cursoGitGithub,
    titutlo: 'Git e Github compartilhando e colaborando em projetos',
    detalhe:
      'Neste curso, aprendi a versionar projetos utilizando o Git, garantindo organização e controle das mudanças no código. Também adquiri habilidades essenciais como compartilhar e colaborar em projetos no GitHub, lidar com conflitos de código e manter a continuidade dos projetos. Além disso, aprendi a analisar e modificar o histórico de commits para um desenvolvimento mais organizado.',
    ano: '2024',
    area: 'Git e Github',
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
