import st from '../assets/styles/Sobre.module.sass';
import cn from 'classnames';

export default function SobreMim() {
  return (
    <section className={cn('container')} aria-label='Sobre Mim'>
      <section className={st.sobreContainer}>
        <div>
          <h1 className='title large-size'>Sobre Mim</h1>
        </div>
        <div className={st.sobreDescricao}>
          <p className='text title-manrope'>
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.
          </p>
          <p className='text'>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>
        </div>
        <section className={st.sobreHabilidades}>
          <div>
            <h2 className='title medium-size'>Habilidades</h2>
          </div>
          <div>
            <p className='text'>
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.{' '}
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
