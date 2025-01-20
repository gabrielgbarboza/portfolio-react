import st from '../assets/styles/ProjetosECursos.module.sass';

export default function ContentCard({ items }) {
  if (!items || items.length === 0) {
    return <p>não há items disponíveis no momento.</p>;
  }
  return (
    <section aria-label='Items'>
      {items.map(
        (
          {
            type,
            tipo,
            imagem,
            titutlo,
            detalhe,
            ano,
            area,
            ver,
            verLink,
            arrow,
            github,
            githubLink,
            githubLogo,
          },
          index
        ) => (
          <article
            key={index}
            className={st.cardContainer}
            aria-label={`${type}: ${titutlo}`}
          >
            <div className={st.cardImagem}>
              <span>{tipo}</span>
              <img src={imagem} alt={`Imagem do ${type} ${titutlo}`} />
            </div>
            <div className={st.cardDescricao}>
              <h3 className='text title-manrope'>{titutlo}</h3>
              <p className='text'>{detalhe}</p>
              <div className={st.cardDescricaoDados}>
                <h4>PROJECT INFO</h4>
                <div>
                  <span>Ano</span>
                  <span>{ano}</span>
                </div>
                <div>
                  <span>Área</span>
                  <span>{area}</span>
                </div>
              </div>
              <div className={st.cardDescricaoLinks}>
                <a
                  href={verLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Live demo for ${titutlo}`}
                >
                  {ver} <img className={st.imgArrow} src={arrow} alt='' />
                </a>
                <a
                  href={githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`See ${titutlo} on GitHub`}
                >
                  {github}{' '}
                  <img className={st.imgGithub} src={githubLogo} alt='' />{' '}
                </a>
              </div>
            </div>
          </article>
        )
      )}
    </section>
  );
}
