import st from '../assets/styles/Contato.module.sass';
import cn from 'classnames';
import logoLinkedin from '../assets/img/logoLinkedin.svg';
import logoGithub from '../assets/img/logoGithub.svg';

export default function Contato() {
  return (
    <section className={cn('container')}>
      <section className={st.contato}>
        <div>
          <h1 className='title medium-size'>Contate-me</h1>
          <p className='text'>Mande um olá para gabrielgbarbozadev@gmail.com</p>
          <span className='text'>
            Para mais informações, acesse os links abaixo
          </span>
          <div className={st.contatoLogos}>
            <img src={logoLinkedin} alt='' />
            <img src={logoGithub} alt='' />
          </div>
        </div>
        <div className={st.contatoFormulario}>
          <form action=''></form>
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
          <button className={st.contatoButton}>Enviar</button>
        </div>
      </section>
      <footer>
        <span className='text'>@2025 Gabriel Barboza</span>
      </footer>
    </section>
  );
}
