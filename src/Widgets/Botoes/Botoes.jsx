import styles from "./Botoes.module.css";
import { useState , useEffect } from "react";

function Botoes( { handleNumero, handleOperador, handleLimpar, handleVirgula, handleResultado }){
  


 
  // seria interessante trocar os operadores por svg e talvez o numeros tbm

  return(

    <>
    <section className={styles.containerPai}>
    <section className={styles.containerFilho}>

    <div className={styles.primeiraFileira}>

      <button onClick={() => handleNumero(1)} className={styles.botao} >1</button>
      <button onClick={() => handleNumero(2)} className={styles.botao} >2</button>
      <button onClick={() => handleNumero(3)} className={styles.botao} >3</button>
      <button onClick={() => handleOperador("+")} className={styles.botao} >+</button>
      <button onClick={() => handleLimpar("C")} className={styles.botao} >C</button>

    </div>

    <div className={styles.segundaFileira}>

      <button onClick={() => handleNumero(4)} className={styles.botao} >4</button>
      <button onClick={() => handleNumero(5)} className={styles.botao} >5</button>
      <button onClick={() => handleNumero(6)} className={styles.botao} >6</button>
      <button onClick={() => handleOperador("-")} className={styles.botao} >-</button>

    </div>

    <div className={styles.terceiraFileira}>

      <button onClick={() => handleNumero(7)} className={styles.botao} >7</button>
      <button onClick={() => handleNumero(8)} className={styles.botao} >8</button>
      <button onClick={() => handleNumero(9)} className={styles.botao} >9</button>
      <button onClick={() => handleOperador("/")} className={styles.botao} >/</button>

    </div>

    <div className={styles.quartaFileira}>

      <button onClick={() => handleNumero(0)} className={styles.botao} >0</button>
      <button onClick={() => handleVirgula(",")} className={styles.botao} >,</button>
      <button onClick={() => handleResultado("=")} className={styles.botao} >=</button>
      <button onClick={() => handleOperador("X")} className={styles.botao} >X</button>

    </div>

  
    </section>
    </section>

    </>
  )

}

export default Botoes
