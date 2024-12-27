import st from '../assets/styles/Projetos.module.sass';
import imagemTeste from '../assets/img/cardTeste.png';
import arrow from '../assets/img/arrow.svg';
import logoGithubGreen from '../assets/img/logoGithubGreen.svg';

export default function ProjetoItems() {
  const projetosItems = [
    {
      tipoProjeto: 'Conceptual Work',
      imagemProjeto: imagemTeste,
      titutloProjeto: 'Promotional landing page for our favorite show',
      detalheProjeto:
        'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
      anoProjeto: '2023',
      areaProjeto: 'Front end Developer',
      verProjeto: 'Live demo',
      githubProjeto: 'See on gitHub',
    },
    {
      tipoProjeto: 'Second Projetct',
      imagemProjeto: imagemTeste,
      titutloProjeto: 'Um teste de um objeto criado',
      detalheProjeto:
        'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
      anoProjeto: '2023',
      areaProjeto: 'Front end Developer',
      verProjeto: 'Live demo',
      githubProjeto: 'See on gitHub',
    },
    {
      tipoProjeto: 'Second Projetct',
      imagemProjeto: imagemTeste,
      titutloProjeto: 'Um teste de um objeto criado',
      detalheProjeto:
        'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
      anoProjeto: '2023',
      areaProjeto: 'Front end Developer',
      verProjeto: 'Live demo',
      githubProjeto: 'See on gitHub',
    },
  ];

  return (
    <section aria-label='Projetos'>
      {projetosItems.map(
        (
          {
            tipoProjeto,
            imagemProjeto,
            titutloProjeto,
            detalheProjeto,
            anoProjeto,
            areaProjeto,
            verProjeto,
            githubProjeto,
          },
          index
        ) => (
          <article
            key={index}
            className={st.projetosContainer}
            aria-label={`Projeto: ${titutloProjeto}`}
          >
            <div className={st.projetosImagem}>
              <span>{tipoProjeto}</span>
              <img
                src={imagemProjeto}
                alt={`Imagem do projeto ${titutloProjeto}`}
              />
            </div>
            <div className={st.projetosDescricao}>
              <h3 className='text title-manrope'>{titutloProjeto}</h3>
              <p className='text'>{detalheProjeto}</p>
              <div className={st.projetosDescricaoDados}>
                <h4>PROJECT INFO</h4>
                <div>
                  <span>Year</span>
                  <span>{anoProjeto}</span>
                </div>
                <div>
                  <span>Role</span>
                  <span>{areaProjeto}</span>
                </div>
              </div>
              <div className={st.projetosDescricaoLinks}>
                <a href='/' aria-label={`Live demo for ${titutloProjeto}`}>
                  {verProjeto}{' '}
                  <img className={st.imgArrow} src={arrow} alt='' />
                </a>
                <a href='/' aria-label={`See ${titutloProjeto} on GitHub`}>
                  {githubProjeto}{' '}
                  <img className={st.imgGithub} src={logoGithubGreen} alt='' />{' '}
                </a>
              </div>
            </div>
          </article>
        )
      )}
    </section>
  );
}
