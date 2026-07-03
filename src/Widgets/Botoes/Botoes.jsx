import styles from "./Botoes.module.css"

function Botoes(){

  const primeiroNumero = 0;
  const operador = 0;
  const segundoNumero = 0;
  const resultado = 0;

  // seria interessante trocar os operadores por svg e talvez o numeros tbm

  return(

    <>
    <section className={styles.containerPai}>
    <section className={styles.containerFilho}>

    <div className={styles.primeiraFileira}>

      <button className={styles.botao} >1</button>
      <button className={styles.botao} >2</button>
      <button className={styles.botao} >3</button>
      <button className={styles.botao} >+</button>
      <button className={styles.botao} >C</button>

    </div>

    <div className={styles.segundaFileira}>

      <button className={styles.botao} >4</button>
      <button className={styles.botao} >5</button>
      <button className={styles.botao} >6</button>
      <button className={styles.botao} >-</button>

    </div>

    <div className={styles.terceiraFileira}>

      <button className={styles.botao} >7</button>
      <button className={styles.botao} >8</button>
      <button className={styles.botao} >9</button>
      <button className={styles.botao} >/</button>

    </div>

    <div className={styles.quartaFileira}>

      <button className={styles.botao} >0</button>
      <button className={styles.botao} >,</button>
      <button className={styles.botao} >=</button>
      <button className={styles.botao} >X</button>

    </div>

  
    </section>
    </section>

    </>
  )

}

export default Botoes
