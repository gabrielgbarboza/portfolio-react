import st from '../assets/styles/Sobre.module.sass';
import cn from 'classnames';

export default function SobreMim() {
  return (
    <section className={cn('container')} aria-label='Sobre Mim'>
      <section id='sobre' className={st.sobreContainer}>
        <div>
          <h1 className='title large-size'>Sobre Mim</h1>
        </div>
        <div className={st.sobreDescricao}>
          <p className='text title-manrope'>
            Desenvolverdor Web, focado em JavaScript e React.js
          </p>
          <p className='text'>
            Sou um educador em transição de carreira para área de
            desenvolvimento (WEB & afins). No momento, busco oportunidades de
            estágio ou programas de trainee para aplicar meus conhecimentos em
            projetos reais. Minhas experiências como professor e pesquisador
            desenvolveram soft skills interpessoais e organizacionais
            importantes, como comunicação clara, trabalho em equipe e
            adaptabilidade — essenciais para ambientes colaborativos e ágeis.
            Atualmente, estou consolidando minhas habilidades em Desenvolvimento
            Web, com foco em dominar JavaScript e as melhores práticas de
            programação, como clean code, refactoring e code reviews.
          </p>
        </div>
        <section className={st.sobreHabilidades}>
          <div>
            <h2 className='title medium-size'>Habilidades</h2>
          </div>
          <div>
            <p className='text'>
              Estou construindo uma base sólida em Lógica de Programação e
              Denvolvimento Web. Aprendo rápido e com facilidade, me dê
              instruções do que fazer e te entregarei o esperado.{' '}
            </p>
          </div>
          <div className={st.listaHabilidades}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT JS</li>
              <li>C++</li>
              <li>GIT</li>
              <li>LAYOUT RESPONSIVO</li>
            </ul>
          </div>
        </section>
      </section>
    </section>
  );
}
