import st from '../assets/styles/ProjetosECursos.module.sass';
import cn from 'classnames';
import ContentCard from './ContentCard.jsx';
import cursoCongenial from '../assets/img/Cursos-C++.jpg';
import cursoinitProgramacao from '../assets/img/Cursos-InicianteEmProgramação.png';
import cursoGitGithub from '../assets/img/Cursos-GitGithub.png';
import cursoAlgoritmo from '../assets/img/Cursos-Algoritmo.png';
import cursoHtmlECss from '../assets/img/Cursos-HtmlECss.png';
import arrow from '../assets/img/arrow.svg';

const cursosCards = [
  {
    type: 'Curso',
    tipo: 'Curso em Vídeo',
    imagem: cursoAlgoritmo,
    titutlo: 'Curso de Algoritmo',
    detalhe:
      'Porta de entrada para novos programadores, esse curso foi essencial para aprender os fundamentos de algoritmos e lógica de programação. Durante as aulas, aprendi a trabalhar com variáveis, tipos de dados, operadores lógicos, condicionais e loops. Além disso, também descobri como criar funções e procedimentos para modularizar e reutilizar código, entendendo a importância do escopo e dos parâmetros. Os desafios propostos pelo Guanabara ao final das aulas foram essenciais para consolidar o aprendizado.',
    ano: '2024',
    area: 'Programming Logic',
    ver: 'Mais Certificações',
    verLink:
      'https://www.linkedin.com/in/gabrielgbarboza/details/certifications/',
    arrow: arrow,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
  {
    type: 'Curso',
    tipo: 'Origamid',
    imagem: cursoHtmlECss,
    titutlo: 'Html e CSS para iniciantes',
    detalhe:
      'O Curso de HTML e CSS para Iniciantes da plataforma Origamid foi essencial para iniciar minha prática em desenvolvimento web. As aulas cobriram os fundamentos do HTML e CSS, incluindo as estruturas básicas dos documentos HTML, tags, seletores de CSS, propriedades e valores. Além disso, ele também abordou técnicas de design responsivo usando flexbox e grid, e incluiu projetos práticos que serão disponibilizados em breve no portfólio.',
    ano: '2025',
    area: 'Front end Developer',
    ver: 'Mais Certificações',
    verLink:
      'https://www.linkedin.com/in/gabrielgbarboza/details/certifications/',
    arrow: arrow,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
  {
    type: 'Curso',
    tipo: 'Escola Congenial',
    imagem: cursoCongenial,
    titutlo: 'Lógica de Programação em C++',
    detalhe:
      'O Curso de Lógica de Programação em C++ da Escola Congenial é desafiador para iniciantes. Através dele, foi possível aprender os princípios da linguagem e de lógica de programação, incluindo comandos de entrada e saída (input and output), expressões aritméticas e lógicas (and, or, not), desvios condicionais (if e else), laços de repetição (while e for), arrays, funções e structs. A parte desafiadora foram os exercícios lógicos com diferentes níveis de dificuldade, que demandaram tempo e determinação para serem resolvidos.',
    ano: '2024',
    area: 'Programming Logic / C++',
    ver: 'Mais Certificações',
    verLink:
      'https://www.linkedin.com/in/gabrielgbarboza/details/certifications/',
    arrow: arrow,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
  {
    type: 'Curso',
    tipo: 'Alura',
    imagem: cursoinitProgramacao,
    titutlo: 'Iniciante em Programação',
    detalhe:
      'Essa formação completa para iniciantes em programação da Alura me permitiu ampliar e diversificar meus conhecimentos, focando principalmente em JavaScript e Lógica de Programação. Durante as aulas, aprendemos desde a criação e análise de problemas computacionais até a manipulação do Git e GitHub para hospedagem e colaboração de projetos. Foi ideal para o início da minha transição de carreira, auxiliando na melhor compreensão das áreas de tecnologia e na comunicação com a área de desenvolvimento.',
    ano: '2024',
    area: 'Programming Logic / JavaScript',
    ver: 'Mais Certificações',
    verLink:
      'https://www.linkedin.com/in/gabrielgbarboza/details/certifications/',
    arrow: arrow,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
  {
    type: 'Curso',
    tipo: 'Alura',
    imagem: cursoGitGithub,
    titutlo: 'Git e Github: compartilhando e colaborando em projetos',
    detalhe:
      'Com o Curso de Git e GitHub, aprendi a versionar projetos utilizando o Git, garantindo organização e controle das mudanças no código. Também adquiri habilidades essenciais sobre como compartilhar e colaborar em projetos no GitHub, lidar com conflitos de código e manter a continuidade dos projetos. Além disso, aprendi a analisar e modificar o histórico de commits para um desenvolvimento mais organizado.',
    ano: '2024',
    area: 'Git e Github',
    ver: 'Mais Certificações',
    verLink:
      'https://www.linkedin.com/in/gabrielgbarboza/details/certifications/',
    arrow: arrow,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
];

export default function Cursos() {
  return (
    <section id='cursos' className={cn('container')} aria-label='Cursos'>
      <header className={st.cardsIntroducao}>
        <h2 className='title medium-size'>Cursos e certificações</h2>
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
