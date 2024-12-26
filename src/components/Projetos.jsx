import st from '../assets/styles/Projetos.module.sass';
import cn from 'classnames';
import ProjetoItems from './ProjetoItems.jsx';

export default function Projetos() {
  return (
    <div className={cn('container')}>
      <div>
        <div className={st.projetosIntroducao}>
          <h2 className='title medium-size'>Projetos Pessoais</h2>
          <p className='text'>
            {' '}
            Aqui estão alguns dos projetos selecionados que demonstram
            experiência com desenvolvimento front-end.{' '}
          </p>
        </div>
      </div>
      <ProjetoItems />
    </div>
  );
}
