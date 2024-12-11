import logoLinkedin from "../../src/img/logoLinkedin.svg";
import logoGithub from "../../src/img/logoGithub.svg";
import gabrielIntroducao from "../../src/img/gabrielIntroducao.png";
import st from "../../src/styles/Introducao.module.sass";

export default function Introducao() {
  return (
    <div className={st.appIntroducao}>
      <div className={st.introducaoDescricao}>
        <h1>Prazer, Gabriel Barboza</h1>
        <p>
          De professor a futuro desenvolvedor: um profissional em transição de
          carreira focado em Desenvolvimento Web.
        </p>
        <div className={st.introducaoContato}>
          <a href="#contato">CONTACTE-ME</a>
          <img src={logoLinkedin} alt="" />
          <img src={logoGithub} alt="" />
          <div className={st.circulo}></div>
        </div>
      </div>

      <img
        className={st.introducaoFoto}
        src={gabrielIntroducao}
        alt="Foto de Gabriel"
      />
    </div>
  );
}
