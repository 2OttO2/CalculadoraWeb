import styles from "./Botoes.module.css";
import { useState , useEffect, useRef } from "react";
import botaoSound from "../../sounds/botao.mp3";
import resultadoSound from "../../sounds/resultado.mp3";

function Botoes( { handleNumero, handleOperador, handleLimpar, handleVirgula, handleResultado, mutado}){
 
  //resolver animation dos botao no input do teclado
  const clickSoundBotao = new Audio(botaoSound);
  const clickSoundResultado = new Audio(resultadoSound);
  const [botaoAtivo,setBotaoAtivo] = useState("");

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
          setBotaoAtivo("0");
        break;
        case "1":
          botao1.current.click();
          setBotaoAtivo("1");
          break;
        case "2":
          botao2.current.click();
           setBotaoAtivo("2");
          break;
        case "3":
          botao3.current.click();
          setBotaoAtivo("3");
          break;
        case "4":
          botao4.current.click();
          setBotaoAtivo("4");
          break;
        case "5":
          botao5.current.click();
          setBotaoAtivo("5");
          break;
        case "6":
          botao6.current.click();
          setBotaoAtivo("6");
          break;
        case "7":
          botao7.current.click();
          setBotaoAtivo("7");
          break;
        case "8":
          botao8.current.click();
          setBotaoAtivo("8");
          break;
        case "9":
          botao9.current.click();
          setBotaoAtivo("9");
          break;

        case "x":
        case "X":
        case "*":
          setBotaoAtivo("x");
          botaoMultiplicacao.current.click();
          break;
        case "+":
          setBotaoAtivo("+");
          botaoAdicao.current.click();
          break;
        case "-":
          setBotaoAtivo("-");
          botaoSubtracao.current.click();
          break;
        case "%":
          setBotaoAtivo("%");
          botaoPorcentagem.current.click();
          break;
        case "/":
          setBotaoAtivo("/");
          botaoDivisao.current.click();
          break;
        
        case ".":
        case ",":
          setBotaoAtivo(",");
          botaoVirgula.current.click();
          break;

        case "Enter":
          setBotaoAtivo("enter");
          botaoResultado.current.click();
          break;

        case "Escape":
        case "c":
        case "C":
          setBotaoAtivo("c");
          botaoApagarTudo.current.click();
          break;

        default:
          break;

      
      }
    };
    const handleKeyUp = () => {
      setBotaoAtivo("");
    };

    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown",handleKeyDown);

      return() => {
        window.removeEventListener("keyup", handleKeyUp);
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

      <button ref={botao1} onClick={() => handleNumero(1) & tocarSomBotao()} className={botaoAtivo === "1" ? styles.botaoAtivo : styles.botao} >1</button>
      <button ref={botao2} onClick={() => handleNumero(2) & tocarSomBotao()} className={botaoAtivo === "2" ? styles.botaoAtivo : styles.botao} >2</button>
      <button ref={botao3} onClick={() => handleNumero(3) & tocarSomBotao()} className={botaoAtivo === "3" ? styles.botaoAtivo : styles.botao} >3</button>
      <button ref={botaoAdicao} onClick={() => handleOperador("+") & tocarSomBotao()} className={botaoAtivo === "+" ? styles.botaoAtivo : styles.botao} >+</button>
     
    </div>

    <div className={styles.segundaFileira}>

      <button ref={botao4} onClick={() => handleNumero(4) & tocarSomBotao()} className={botaoAtivo === "4" ? styles.botaoAtivo : styles.botao} >4</button>
      <button ref={botao5} onClick={() => handleNumero(5) & tocarSomBotao()} className={botaoAtivo === "5" ? styles.botaoAtivo : styles.botao} >5</button>
      <button ref={botao6} onClick={() => handleNumero(6) & tocarSomBotao()} className={botaoAtivo === "6" ? styles.botaoAtivo : styles.botao} >6</button>
      <button ref={botaoSubtracao} onClick={() => handleOperador("-") & tocarSomBotao()} className={botaoAtivo === "-" ? styles.botaoAtivo : styles.botao} >-</button>

    </div>

    <div className={styles.terceiraFileira}>

      <button ref={botao7} onClick={() => handleNumero(7) & tocarSomBotao()} className={botaoAtivo === "7" ? styles.botaoAtivo : styles.botao} >7</button>
      <button ref={botao8} onClick={() => handleNumero(8) & tocarSomBotao()} className={botaoAtivo === "8" ? styles.botaoAtivo : styles.botao} >8</button>
      <button ref={botao9} onClick={() => handleNumero(9) & tocarSomBotao()} className={botaoAtivo === "9" ? styles.botaoAtivo : styles.botao} >9</button>
      <button ref={botaoDivisao} onClick={() => handleOperador("/") & tocarSomBotao()} className={botaoAtivo === "/" ? styles.botaoAtivo : styles.botao} >/</button>

    </div>

    <div className={styles.quartaFileira}>

      <button ref={botao0} onClick={() => handleNumero(0) & tocarSomBotao()} className={botaoAtivo === "0" ? styles.botaoAtivo : styles.botao} >0</button>
      <button ref={botaoVirgula} onClick={() => handleVirgula(",") & tocarSomBotao()} className={botaoAtivo === "," ? styles.botaoAtivo : styles.botao} >,</button>
      <button ref={botaoPorcentagem} onClick={() => handleOperador("%") & tocarSomBotao()} className={botaoAtivo === "%" ? styles.botaoAtivo : styles.botao} >%</button>
      <button ref={botaoMultiplicacao} onClick={() => handleOperador("X") & tocarSomBotao()} className={botaoAtivo === "x" ? styles.botaoAtivo : styles.botao} >X</button>

    </div>

    <div className={styles.quintaFileira}>

      <button ref={botaoApagarTudo} onClick={() => handleLimpar("C") & tocarSomResultado()} className={botaoAtivo === "c" ? styles.botaoEspecialAtivo : styles.botaoEspecial} >C</button>
      <button ref={botaoResultado} onClick={() => handleResultado("=") & tocarSomResultado()} className={botaoAtivo === "enter" ? styles.botaoEspecialAtivo : styles.botaoEspecial} >=</button>

    </div>

  
    </section>
    </section>

    </>
  )

}
export default Botoes
