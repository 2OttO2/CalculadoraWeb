import styles from "./Visor.module.css";
import deletar from "../../sounds/deletar.mp3;


function Visor({primeiroNumero,operador,segundoNumero,resultado,apagarUltimo}){

  
  const clickSoundDeletar = new Audio(deletar);

    function tocarSomDeletar(){
    clickSoundDeletar.curreentTime = 0;
    clickSoundDeletar.cloneNode().play();

  }

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
      <button onClick={() => apagarUltimo() & tocarSomDeletar()} className={styles.limpar}>❌</button>
  </>

  )
}


export default Visor
