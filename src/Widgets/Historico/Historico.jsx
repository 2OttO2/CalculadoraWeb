import styles from "./Historico.module.css";
import marcadorSound from "../../sounds/Marcador.mp3";

function Historico({ historico, historicoAberto, setHistoricoAberto }) {

  const clickSoundMarcador = new Audio(marcadorSound);

    function tocarSomMarcador(){
    clickSoundMarcador.curreentTime = 0;
    clickSoundMarcador.play();

  }

  return (
    <>
      <button
        className={`${styles.botaoSlide} ${historicoAberto ? styles.botaoSlideAberto : styles.botaoSlideFechado}`}
        onClick={() => setHistoricoAberto(!historicoAberto) & tocarSomMarcador()}
      >
        {historicoAberto ? "❯" : "❮"}
      </button>
      
      <div className={`${styles.historico} ${historicoAberto ? styles.aberto : styles.fechado}`}>
        
        <div className={styles.historicoFilho}>
        <h2 className={styles.titulo}>Histórico</h2>

        {historico.map((item, index) => (
          <p className={styles.numerosHistorico} key={index}>
            {item}
          </p>

        ))}
        </div>
      </div>
      
    </>
  );
}

export default Historico;
