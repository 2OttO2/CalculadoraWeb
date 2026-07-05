import styles from "./Visor.module.css";

function Visor({primeiroNumero,operador,segundoNumero,resultado,apagarUltimo}){

  return(

  <>
   <div className={styles.tela}>
     
      <p className={styles.visor}>
        <span className={styles.primeiroNumero}> {primeiroNumero.replace(".",",")} </span>
        <span className={styles.operador}> {operador} </span>
        <span className={styles.segundoNumero}> {segundoNumero.replace(".",",")} </span>
        <span className={styles.resultado}> {resultado.replace(".",",")} </span>
      </p>
      
   </div>
      <button onClick={apagarUltimo} className={styles.limpar}>l</button>
  </>

  )
}


export default Visor
