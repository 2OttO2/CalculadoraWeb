import styles from "./Botoes.module.css";
import { useState , useEffect, useRef } from "react";
import botaoSound from "../../sounds/botao.mp3";
import resultadoSound from "../../sounds/resultado.mp3";

function Botoes( { handleNumero, handleOperador, handleLimpar, handleVirgula, handleResultado, mutado}){
 
  //resolver animation dos botao no input do teclado
  const clickSoundBotao = new Audio(botaoSound);
  const clickSoundResultado = new Audio(resultadoSound);

  const botao0  = useRef(null);
  const botao1 = useRef(null);
  const botao2 = useRef(null);
  const botao3 = useRef(null);
  const botao4 = useRef(null);
  const botao5 = useRef(null);
  const botao6 = useRef(null);
  const botao7 = useRef(null);
  const botao8 = useRef(null);
  const botao9 = useRef(null);
  const botaoVirgula = useRef(null);

  const botaoAdicao = useRef(null);
  const botaoSubtracao = useRef(null);
  const botaoDivisao = useRef(null);
  const botaoPorcentagem = useRef(null);
  const botaoMultiplicacao = useRef(null);

  const botaoApagarTudo = useRef(null);

  const botaoResultado = useRef(null);
  
   useEffect(() =>{
    const handleKeyDown = (tecla) => {

      switch(tecla.key){
        case "0":
          botao0.current.click();
          console.log(apagarUltimo);
        break;
        case "1":
          botao1.current.click();
          break;
        case "2":
          botao2.current.click();
          break;
        case "3":
          botao3.current.click();
          break;
        case "4":
          botao4.current.click();
          break;
        case "5":
          botao5.current.click();
          break;
        case "6":
          botao6.current.click();
          break;
        case "7":
          botao7.current.click();
          break;
        case "8":
          botao8.current.click();
          break;
        case "9":
          botao9.current.click();
          break;

        case "x":
        case "X":
        case "*":
          botaoMultiplicacao.current.click();
          break;
        case "+":
          botaoAdicao.current.click();
          break;
        case "-":
          botaoSubtracao.current.click();
          break;
        case "%":
          botaoPorcentagem.current.click();
          break;
        case "/":
          botaoDivisao.current.click();
          break;
        
        case ".":
        case ",":
          botaoVirgula.current.click();
          break;

        case "Enter":
          botaoResultado.current.click();
          break;

        case "Escape":
        case "c":
        case "C":
          botaoApagarTudo.current.click();
          break;

        default:
          break;

      }
    };
    window.addEventListener("keydown",handleKeyDown);

      return() => {
        window.removeEventListener("keydown", handleKeyDown);
    };
  },[])


  function tocarSomBotao(){
      if(!mutado){
    clickSoundBotao.currentTime = 0;
    clickSoundBotao.play();
    }else{
      return;
    }
  }
  function tocarSomResultado(){
    if(!mutado){
    clickSoundResultado.currentTime = 0;
    clickSoundResultado.play();
    }else{
      return;
    }
  }

  return(

    <>
    <section className={styles.containerPai}>
    <section className={styles.containerFilho}>

    <div className={styles.primeiraFileira}>

      <button ref={botao1} onClick={() => handleNumero(1) & tocarSomBotao()} className={styles.botao} >1</button>
      <button ref={botao2} onClick={() => handleNumero(2) & tocarSomBotao()} className={styles.botao} >2</button>
      <button ref={botao3} onClick={() => handleNumero(3) & tocarSomBotao()} className={styles.botao} >3</button>
      <button ref={botaoAdicao} onClick={() => handleOperador("+") & tocarSomBotao()} className={styles.botao} >+</button>
     
    </div>

    <div className={styles.segundaFileira}>

      <button ref={botao4} onClick={() => handleNumero(4) & tocarSomBotao()} className={styles.botao} >4</button>
      <button ref={botao5} onClick={() => handleNumero(5) & tocarSomBotao()} className={styles.botao} >5</button>
      <button ref={botao6} onClick={() => handleNumero(6) & tocarSomBotao()} className={styles.botao} >6</button>
      <button ref={botaoSubtracao} onClick={() => handleOperador("-") & tocarSomBotao()} className={styles.botao} >-</button>

    </div>

    <div className={styles.terceiraFileira}>

      <button ref={botao7} onClick={() => handleNumero(7) & tocarSomBotao()} className={styles.botao} >7</button>
      <button ref={botao8} onClick={() => handleNumero(8) & tocarSomBotao()} className={styles.botao} >8</button>
      <button ref={botao9} onClick={() => handleNumero(9) & tocarSomBotao()} className={styles.botao} >9</button>
      <button ref={botaoDivisao} onClick={() => handleOperador("/") & tocarSomBotao()} className={styles.botao} >/</button>

    </div>

    <div className={styles.quartaFileira}>

      <button ref={botao0} onClick={() => handleNumero(0) & tocarSomBotao()} className={styles.botao} >0</button>
      <button ref={botaoVirgula} onClick={() => handleVirgula(",") & tocarSomBotao()} className={styles.botao} >,</button>
      <button ref={botaoPorcentagem} onClick={() => handleOperador("%") & tocarSomBotao()} className={styles.botao}>%</button>
      <button ref={botaoMultiplicacao} onClick={() => handleOperador("X") & tocarSomBotao()} className={styles.botao} >X</button>

    </div>

    <div className={styles.quintaFileira}>

      <button ref={botaoApagarTudo} onClick={() => handleLimpar("C") & tocarSomResultado()} className={styles.botaoEspecial} >C</button>
      <button ref={botaoResultado} onClick={() => handleResultado("=") & tocarSomResultado()} className={styles.botaoEspecial} >=</button>

    </div>

  
    </section>
    </section>

    </>
  )

}
export default Botoes
