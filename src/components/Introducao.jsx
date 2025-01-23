import logoLinkedin from '../assets/img/logoLinkedin.svg';
import logoGithub from '../assets/img/logoGithub.svg';
import gabrielIntroducao from '../assets/img/gabrielIntroducao.png';
import st from '../assets/styles/Introducao.module.sass';
import cn from 'classnames';

export default function Introducao() {
  return (
    <section id='home' className='container' aria-label='apresentação'>
      <div className={cn(st.introducaoContainer)}>
        <div className={st.introducaoDescricao}>
          <h1 className='title large-size'>Prazer, Gabriel Barboza</h1>
          <p className='text'>
            De professor a desenvolvedor: um profissional em transição de
            carreira, motivado e pronto para abraçar novas oportunidades.
          </p>
          <div className={st.introducaoContato}>
            <a href='#contato' className={st.botaoContato}>
              CONTATE-ME
            </a>
            <a
              href='https://linkedin.com/in/gabrielgbarboza'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={logoLinkedin} alt='' />
            </a>
            <a
              href='https://github.com/gabrielgbarboza'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={logoGithub} alt='' />
            </a>
          </div>
        </div>
        <img
          className={st.introducaoFoto}
          src={gabrielIntroducao}
          alt='Foto de Gabriel'
        />
      </div>
    </section>
  );
}
