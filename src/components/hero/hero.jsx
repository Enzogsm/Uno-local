import style from "../hero/hero.module.css";
import imagemUno from "../../assets/img/Caixa.png";

const hero = () => {
  return (
    <section className={style.Hero}>
      <div className={style.HeroWrapper}>
        <div className={style.HeroContent}>
          <div className={style.HeroConteudo}>
            <h1>UNO® minimalista,</h1>
            <p>
              representa uma excelente opção de presente para colecionadores!
            </p>
          </div>
          <p>
            Esta edição especial do UNO®, o jogo de cartas adorado por todos,
            tem um visual totalmente exclusivo.
          </p>
          <div className={style.HeroButton}>
            <a className={style.HeroSaiba} href="#">Saiba mais</a>
          </div>
          <div className={style.HeroButton2}>
            <a href="#">onde encontrar</a>
          </div>
        </div>
        <div className={style.HeroContent2}>
          <img src={imagemUno} alt="caixa do Uno" />
        </div>
      </div>
    </section>
  );
};

export default hero;
