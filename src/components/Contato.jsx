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
            name='forms-contato'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
            action='/'
          >
            {/* Formulario Netlify */}
            <input type='hidden' name='form-name' value='forms-contato' />
            <input type='hidden' name='bot-field' />
            <label className='text' htmlFor='Nome'>
              Nome
            </label>
            <input type='text' id='usuário' name='Nome' required />
            <label className='text' htmlFor='Email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='Email'
              placeholder='nome@email.com'
              required
            />
            <label className='text' htmlFor='Assunto'>
              Assunto
            </label>
            <input type='text' id='Assunto' name='Assunto' required />
            <label className='text' htmlFor='Mensagem'>
              Mensagem
            </label>
            <textarea
              id='mensagem'
              name='Mensagem'
              rows='10'
              required
            ></textarea>
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
