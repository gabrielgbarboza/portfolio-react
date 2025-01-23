import st from '../assets/styles/Contato.module.sass';
import cn from 'classnames';
import logoLinkedin from '../assets/img/logoLinkedin.svg';
import logoGithub from '../assets/img/logoGithub.svg';

export default function Contato() {
  return (
    <section id='contato' className={cn('container')}>
      <section className={st.contato}>
        <div>
          <h1 className='title medium-size'>Contate-me</h1>
          <p className='text'>
            Mande um olá para&nbsp;
            <a className='text' href='mailto:gabrielgbarbozadev@gmail'>
              gabrielgbarbozadev@gmail.com
            </a>
          </p>
          <span className='text'>
            Para mais informações, acesse os links abaixo
          </span>
          <div className={st.contatoLogos}>
            <a
              href='https://www.linkedin.com/in/gabrielgbarboza/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={logoLinkedin} alt='' />
            </a>
            <a
              href='https://www.https://github.com/gabrielgbarboza'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={logoGithub} alt='' />
            </a>
          </div>
        </div>
        <div className={st.contatoFormulario}>
          <form
            id='formulario'
            name='formulario-contato'
            method='POST'
            action='/'
            data-netlify='true'
          >
            <input type='hidden' name='form-name' value='formulario-contato' />
            <label className='text' htmlFor='Nome'>
              Nome
            </label>
            <input type='text' id='usuário' name='nome' />
            <label className='text' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='nome@email.com'
            />
            <label className='text' htmlFor='Assunto'>
              Assunto
            </label>
            <input type='text' id='Assunto' name='Assunto' />
            <label className='text' htmlFor='mensagem'>
              Mensagem
            </label>
            <textarea id='mensagem' name='mensagem' rows='10'></textarea>
            <button type='submit' className={st.contatoButton}>
              Enviar
            </button>
          </form>
        </div>
      </section>
      <footer>
        <span className='text'>@2025 Gabriel Barboza</span>
      </footer>
    </section>
  );
}
