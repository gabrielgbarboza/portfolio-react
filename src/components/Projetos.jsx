import st from '../assets/styles/ProjetosECursos.module.sass';
import cn from 'classnames';
import ContentCard from './ContentCard.jsx';
import carrinhoDeCompras from '../assets/img/Projeto-CarrinhoDeCompras.png';
import jogoDoNumeroSecreto from '../assets/img/Projetos-JogoDoNumeroSecreto.png';
import animaisFantasticos from '../assets/img/Projeto-AnimaisFantasticos.png';
import bloonsTd from '../assets/img/projeto-bloonsTd.png';
import arrow from '../assets/img/arrow.svg';
import logoGithubGreen from '../assets/img/logoGithubGreen.svg';

const projetosCards = [
  {
    type: 'PROJECT',
    tipo: 'JavaScript',
    imagem: animaisFantasticos,
    titutlo: 'Animais Fantásticos',
    detalhe:
      'Projeto em andamento: este projeto faz parte do desafio do curso de JavaScript Completo ES6 da plataforma Origamid. Aos poucos, estou implementando uma variedade de funções e métodos JavaScript com o objetivo de dominar a linguagem. O foco é aprender a sintaxe da linguagem, manipulações do DOM, realizar requisições via Fetch API, além de trabalhar com arrow functions, promises, slides e muito mais.',
    ano: '2025',
    area: 'Front end Developer',
    ver: 'See on gitHub',
    verLink: null,
    arrow: logoGithubGreen,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
  {
    type: 'PROJECT',
    tipo: 'C++',
    imagem: bloonsTd,
    titutlo: 'Desafios Blonns TD',
    detalhe:
      'Neste desafio da Escola Congeial, desenvolvi a lógica de um jogo Tower Defense inspirado no Bloons TD 6. O jogo consiste em rodadas progressivamente mais difíceis, onde cada balão possui uma quantidade necessária de dano para ser estourado. Na rodada 100, os macacos enfrentam o Big Airship of Doom (BAD), que requer 28.000 de dano para ser destruído. O desafio envolveu cálculos de dano por segundo e lógica de jogo para determinar se os macacos conseguem vencer o BAD antes que ele invada o território.',
    ano: '2025',
    area: 'programming logic',
    ver: 'See on gitHub',
    verLink: 'https://github.com/gabrielgbarboza/challenges-C-',
    arrow: logoGithubGreen,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
  {
    type: 'PROJECT',
    tipo: 'JavaScript',
    imagem: jogoDoNumeroSecreto,
    titutlo: 'Jogo do Número Secreto',
    detalhe:
      'Um dos meus primeiros projetos, no qual desenvolvi o Jogo do Número Secreto usando JavaScript para manipular elementos no DOM. Trabalhei com funções para modularizar o código e reutilizar blocos de lógica e usei arrays para armazenar e manipular coleções de valores. Além disso, explorei o GitHub para versionamento de código e utilizei o Vercel para a publicação do projeto. O projeto também me permitiu manipular dinamicamente strings e números no JavaScript.',
    ano: '2024',
    area: 'Front end Developer',
    ver: 'Live demo',
    verLink: 'https://jogo-numero-secreto-20.vercel.app/',
    arrow: arrow,
    github: 'See on gitHub',
    githubLink: 'https://github.com/gabrielgbarboza/Jogo-numero-secreto',
    githubLogo: logoGithubGreen,
  },
  {
    type: 'PROJECT',
    tipo: 'JavaScript',
    imagem: carrinhoDeCompras,
    titutlo: 'Carrinho de Compras',
    detalhe:
      'Projeto inspirado em uma prática corriqueira no dia a dia das pessoas, o desafio deste projeto era criar as funções de adicionar e limpar itens num Carrinho de Compras Virtual. A partir da implmentação das funções aprendi a usar split() para separar strings, recuperar e somar valores com value, modificar o DOM com innerHTML e concatenar variáveis usando Template Strings.',
    ano: '2024',
    area: 'Front end Developer',
    ver: 'See on gitHub',
    verLink: 'https://github.com/gabrielgbarboza/projeto-carrinhodecompras',
    arrow: logoGithubGreen,
    github: null,
    githubLink: null,
    githubLogo: null,
  },
];

export default function Projetos() {
  return (
    <section className={cn('container')} aria-label='Projetos Pessoais'>
      <header id='projetos' className={st.cardsIntroducao}>
        <h2 className='title medium-size'>Projetos Pessoais</h2>
        <p className='text'>
          {' '}
          Aqui estão alguns projetos que demonstram minha experiência prática em
          Desenvolvimento Web e Lógica de Programação.{' '}
        </p>
      </header>
      <ContentCard items={projetosCards} />
    </section>
  );
}
