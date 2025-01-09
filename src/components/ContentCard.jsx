import st from '../assets/styles/Projetos.module.sass';
import arrow from '../assets/img/arrow.svg';
import logoGithubGreen from '../assets/img/logoGithubGreen.svg';

export default function ContentCard({ items }) {
  if (!items || items.length === 0) {
    return <p>não há items disponíveis no momento.</p>;
  }
  return (
    <section aria-label='Items'>
      {items.map(
        (
          { type, tipo, imagem, titutlo, detalhe, ano, area, ver, github },
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
                  <span>Year</span>
                  <span>{ano}</span>
                </div>
                <div>
                  <span>Role</span>
                  <span>{area}</span>
                </div>
              </div>
              <div className={st.cardDescricaoLinks}>
                <a href='/' aria-label={`Live demo for ${titutlo}`}>
                  {ver} <img className={st.imgArrow} src={arrow} alt='' />
                </a>
                <a href='/' aria-label={`See ${titutlo} on GitHub`}>
                  {github}{' '}
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
