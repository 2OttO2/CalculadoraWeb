import styles from "./Botoes.module.css";
import { useState , useEffect, useRef } from "react";
import botaoSound from "../../sounds/botao.mp3";
import resultadoSound from "../../sounds/resultado.mp3";

function Botoes( { handleNumero, handleOperador, handleLimpar, handleVirgula, handleResultado, mutado}){
 
  //resolver animation dos botao no input do teclado
  const clickSoundBotao = useRef(new Audio(botaoSound));
  const clickSoundResultado = useRef(new Audio(resultadoSound));

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
  
  useEffect(() => {
    const handleKeyDown = (tecla) => {
      if (tecla.repeat) return;

      const botoes = {
       "0": botao0,
       "1": botao1,
       "2": botao2,
       "3": botao3,
       "4": botao4,
       "5": botao5,
       "6": botao6,
       "7": botao7,
       "8": botao8,
       "9": botao9,

       "x": botaoMultiplicacao,
       "X": botaoMultiplicacao,
       "*": botaoMultiplicacao,

       "+": botaoAdicao,
       "-": botaoSubtracao,
       "/": botaoDivisao,
       "%": botaoPorcentagem,

       ".": botaoVirgula,
       ",": botaoVirgula,

       "Enter": botaoResultado,

       "Escape": botaoApagarTudo,
       "c": botaoApagarTudo,
       "C": botaoApagarTudo,

    };

     const teclaVisual = {
       "*": "x",
       "X": "x",
       "x": "x",
       ".": ",",
       "Enter": "enter",
       "Escape": "c",
       "C": "c",
     };

    if (botoes[tecla.key]) {
      botoes[tecla.key].current.click();
      setBotaoAtivo(teclaVisual[tecla.key] || tecla.key);
    }
  };

  const handleKeyUp = () => {
    setBotaoAtivo("");
  };

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  };
}, []); 

  function tocarSomBotao(){
      if(!mutado){
    clickSoundBotao.current.currentTime = 0;
    clickSoundBotao.current.play();
    }else{
      return;
    }
  }
  function tocarSomResultado(){
    if(!mutado){
    clickSoundResultado.current.currentTime = 0;
    clickSoundResultado.current.play();
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
