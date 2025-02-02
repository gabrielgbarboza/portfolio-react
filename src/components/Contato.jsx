import st from '../assets/styles/Contato.module.sass';
import cn from 'classnames';
import logoLinkedin from '../assets/img/logoLinkedin.svg';
import logoGithub from '../assets/img/logoGithub.svg';
import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataObject = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObject).toString(),
    })
      .then(() => {
        alert('Formulário enviado com sucesso!');
        setFormData({
          nome: '',
          email: '',
          assunto: '',
          mensagem: '',
        });
      })
      .catch((error) => alert('Erro ao enviar formulário: ' + error));
  };
  return (
    <section className={cn('container')}>
      <section id='contato' className={st.contato}>
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
            onSubmit={handleSubmit}
          >
            {/* Formulario Netlify */}
            <input type='hidden' name='form-name' value='formulario-contato' />
            <input type='hidden' name='bot-field' />
            <label className='text' htmlFor='nome'>
              Nome
            </label>
            <input
              type='text'
              id='usuário'
              name='nome'
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <label className='text' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='nome@email.com'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className='text' htmlFor='assunto'>
              Assunto
            </label>
            <input
              type='text'
              id='Assunto'
              name='assunto'
              value={formData.assunto}
              onChange={handleChange}
              required
            />
            <label className='text' htmlFor='mensagem'>
              Mensagem
            </label>
            <textarea
              id='mensagem'
              name='mensagem'
              rows='10'
              value={formData.mensagem}
              onChange={handleChange}
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
