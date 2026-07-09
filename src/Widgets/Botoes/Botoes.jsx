import styles from "./Botoes.module.css";
import { useState , useEffect } from "react";
import botaoSound from "../../sounds/botao.mp3";
import resultadoSound from "../../sounds/resultado.mp3";

function Botoes( { handleNumero, handleOperador, handleLimpar, handleVirgula, handleResultado, mutado }){
  
  const clickSoundBotao = new Audio(botaoSound);
  const clickSoundResultado = new Audio(resultadoSound);

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

      <button onClick={() => handleNumero(1) & tocarSomBotao()} className={styles.botao} >1</button>
      <button onClick={() => handleNumero(2) & tocarSomBotao()} className={styles.botao} >2</button>
      <button onClick={() => handleNumero(3) & tocarSomBotao()} className={styles.botao} >3</button>
      <button onClick={() => handleOperador("+") & tocarSomBotao()} className={styles.botao} >+</button>
     
    </div>

    <div className={styles.segundaFileira}>

      <button onClick={() => handleNumero(4) & tocarSomBotao()} className={styles.botao} >4</button>
      <button onClick={() => handleNumero(5) & tocarSomBotao()} className={styles.botao} >5</button>
      <button onClick={() => handleNumero(6) & tocarSomBotao()} className={styles.botao} >6</button>
      <button onClick={() => handleOperador("-") & tocarSomBotao()} className={styles.botao} >-</button>

    </div>

    <div className={styles.terceiraFileira}>

      <button onClick={() => handleNumero(7) & tocarSomBotao()} className={styles.botao} >7</button>
      <button onClick={() => handleNumero(8) & tocarSomBotao()} className={styles.botao} >8</button>
      <button onClick={() => handleNumero(9) & tocarSomBotao()} className={styles.botao} >9</button>
      <button onClick={() => handleOperador("/") & tocarSomBotao()} className={styles.botao} >/</button>

    </div>

    <div className={styles.quartaFileira}>

      <button onClick={() => handleNumero(0) & tocarSomBotao()} className={styles.botao} >0</button>
      <button onClick={() => handleVirgula(",") & tocarSomBotao()} className={styles.botao} >,</button>
      <button onClick={() => handleOperador("%") & tocarSomBotao()} className={styles.botao}>%</button>
      <button onClick={() => handleOperador("X") & tocarSomBotao()} className={styles.botao} >X</button>

    </div>

    <div className={styles.quintaFileira}>

      <button onClick={() => handleLimpar("C") & tocarSomResultado()} className={styles.botaoEspecial} >C</button>
      <button onClick={() => handleResultado("=") & tocarSomResultado()} className={styles.botaoEspecial} >=</button>

    </div>

  
    </section>
    </section>

    </>
  )

}

export default Botoes
