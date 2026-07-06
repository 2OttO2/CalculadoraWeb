import styles from "./Historico.module.css";

function Historico({ historico, historicoAberto, setHistoricoAberto }) {
  return (
    <>
      <button
        className={`${styles.botaoSlide} ${historicoAberto ? styles.botaoSlideAberto : styles.botaoSlideFechado}`}
        onClick={() => setHistoricoAberto(!historicoAberto)}
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
