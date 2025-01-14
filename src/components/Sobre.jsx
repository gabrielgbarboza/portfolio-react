import st from '../assets/styles/Sobre.module.sass';
import cn from 'classnames';

export default function SobreMim() {
  return (
    <section id='sobre' className={cn('container')} aria-label='Sobre Mim'>
      <section className={st.sobreContainer}>
        <div>
          <h1 className='title large-size'>Sobre Mim</h1>
        </div>
        <div className={st.sobreDescricao}>
          <p className='text title-manrope'>
            Desenvolverdor Web, focado em JavaScript e React.js
          </p>
          <p className='text'>
            Educador em transição para Desenvolvimento Web, com foco em lógica
            de programação e JavaScript. Estou buscando oportunidades de estágio
            ou programas de trainee para aplicar minhas habilidades em projetos
            reais. Minha experiência como professor e pesquisador desenvolveu
            minhas habilidades interpessoais e organizacionais, como comunicação
            clara, trabalho em equipe e adaptabilidade — essenciais para
            ambientes colaborativos e ágeis. Atualmente, estou construindo uma
            base sólida em desenvolvimento web, com foco em dominar JavaScript e
            as melhores práticas de programação.
          </p>
        </div>
        <section className={st.sobreHabilidades}>
          <div>
            <h2 className='title medium-size'>Habilidades</h2>
          </div>
          <div>
            <p className='text'>
              Estou construindo uma base sólida em Desenvolvimento Web e Lógica
              de Programação. Tenho facilidade em aprender rapidamente e trago
              uma excelente bagagem interpessoal.{' '}
            </p>
          </div>
          <div className={st.listaHabilidades}>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACTJS</li>
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
