import styles from "./Visor.module.css";
import deletarSound from "../../sounds/deletar.mp3";
import { useEffect,useRef } from "react"


function Visor({ primeiroNumero, operador, segundoNumero, resultado, apagarUltimo, mutado}){

  
  const clickSoundDeletar = new Audio(deletarSound);

    function tocarSomDeletar(){
    if(!mutado){
    clickSoundDeletar.curreentTime = 0;
    clickSoundDeletar.cloneNode().play();
    }else{
      return;
    }
  }
    const botaoApagarUltimo = useRef(null);
    
       useEffect(() =>{
    const handleKeyDown = (tecla) => {

      switch(tecla.key){
          case "Backspace":
          botaoApagarUltimo.current.click();
          break;
        default:
          break;

      }
    };
    window.addEventListener("keydown",handleKeyDown);

      return() => {
        window.removeEventListener("keydown", handleKeyDown);
    };
  },[]);



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
      <button ref={botaoApagarUltimo} onClick={() => apagarUltimo() & tocarSomDeletar()} className={styles.limpar}>❌</button>
  </>

  )
}


export default Visor
