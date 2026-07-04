import styles from "./Historico.module.css";

function Historico({ historico, historicoAberto, setHistoricoAberto }) {
  return (
    <>
      <button className={styles.botaoSlide} onClick={() => setHistoricoAberto(!historicoAberto)}>
        {historicoAberto ? "❯" : "❮"}
      </button>
      
         <div className={`${styles.historico} ${historicoAberto ? styles.aberto : styles.fechado}`}>
        <h2 className={styles.titulo}>Histórico</h2>
        {historico.map((item, index) => (
          <p className={styles.numerosHistorico} key={index}>
            {item}
          </p>
        ))}
      </div>
      
    </>
  );
}

export default Historico;
