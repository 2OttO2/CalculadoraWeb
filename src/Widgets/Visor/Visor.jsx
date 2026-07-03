import styles from "./Visor.module.css";


function Visor({primeiroNumero,operador,segundoNumero,resultado}){

  return(


   <div className={styles.tela}>
      <p className={styles.visor}>
        <span className={styles.primeiroNumero}> {primeiroNumero} </span>
        <span className={styles.operador}> {operador} </span>
        <span className={styles.segundoNumero}> {segundoNumero} </span>
        <span className={styles.resultado}> = {resultado} </span>
      </p>
   </div>


  )
}


export default Visor
