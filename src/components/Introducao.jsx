import logoLinkedin from "../assets/img/logoLinkedin.svg";
import logoGithub from "../assets/img/logoGithub.svg";
import gabrielIntroducao from "../assets/img/gabrielIntroducao.png";
import st from "../assets/styles/Introducao.module.sass";

export default function Introducao() {
  return (
    <div className="container">
      <div className={st.appIntroducao}>
        <div className={st.introducaoDescricao}>
          <h1 className="title large-size">Prazer, Gabriel Barboza</h1>
          <p className="text">
            De professor a futuro desenvolvedor: um profissional em transição de
            carreira focado em Desenvolvimento Web.
          </p>
          <div className={st.introducaoContato}>
            <a href="#contato">CONTACTE-ME</a>
            <img src={logoLinkedin} alt="" />
            <img src={logoGithub} alt="" />
          </div>
        </div>
        <img
          className={st.introducaoFoto}
          src={gabrielIntroducao}
          alt="Foto de Gabriel"
        />
      </div>
    </div>
  );
}
