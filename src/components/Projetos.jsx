import st from '../assets/styles/ProjetosECursos.module.sass';
import cn from 'classnames';
import ContentCard from './ContentCard.jsx';
import carrinhoDeCompras from '../assets/img/Projeto-CarrinhoDeCompras.png';
import jogoDoNumeroSecreto from '../assets/img/Projetos-JogoDoNumeroSecreto.png';
import animaisFantasticos from '../assets/img/Projeto-AnimaisFantasticos.png';

const projetosCards = [
  {
    type: 'Projetos',
    tipo: 'JavaScript',
    imagem: carrinhoDeCompras,
    titutlo: 'Carrinho de Compras',
    detalhe:
      'Neste projeto, criei um Carrinho de Compras com as funções de adicionar e limpar itens. Aprendi a usar split() para separar strings, recuperar e somar valores com value, modificar o DOM com innerHTML e concatenar variáveis usando Template Strings.',
    ano: '2024',
    area: 'Front end Developer',
    ver: 'Live demo',
    github: 'See on gitHub',
  },
  {
    type: 'Projetos',
    tipo: 'JavaScript',
    imagem: jogoDoNumeroSecreto,
    titutlo: 'Jogo do Número Secreto',
    detalhe:
      'Neste projeto, desenvolvi o Jogo do Número Secreto usando JavaScript para manipular elementos no DOM. Trabalhei com funções para modularizar o código e reutilizar blocos de lógica, e usei arrays para armazenar e manipular coleções de valores. Além disso, explorei o GitHub para versionamento de código e utilizei o Vercel para a publicação do projeto. O projeto também me permitiu manipular dinamicamente strings e números no JavaScript.',
    ano: '2024',
    area: 'Front end Developer',
    ver: 'Live demo',
    github: 'See on gitHub',
  },
  {
    type: 'Projetos',
    tipo: 'JavaScript',
    imagem: animaisFantasticos,
    titutlo: 'Animais Fantásticos',
    detalhe:
      'Projeto em andamento: este projeto faz parte do desafio do curso de JavaScript Completo ES6 da plataforma Origamid. Aos poucos, estou implementando uma variedade de funções e métodos JavaScript com o objetivo de dominar a linguagem. O foco é aprender a sintaxe da linguagem, manipulações do DOM, realizar requisições via Fetch API, além de trabalhar com arrow functions, promises, slides e muito mais.',
    ano: '2025',
    area: 'Front end Developer',
    ver: 'Live demo',
    github: 'See on gitHub',
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
