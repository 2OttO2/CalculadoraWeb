import { useState } from 'react'
import Visor from "./Widgets/Visor/Visor.jsx";
import Botoes from "./Widgets/Botoes/Botoes.jsx";
import Historico from "./Widgets/Historico/Historico.jsx";

import './App.css'

function App() {

const [primeiroNumero,setPrimeiroNumero] = useState("");
const [operador,setOperador] = useState("");
const [segundoNumero,setSegundoNumero] = useState("");
const [resultado,setResultado] = useState("");
const [historico,setHistorico] = useState([]);
const [historicoAberto,setHistoricoAberto] = useState(true);

  function handleNumero(valor){
    if(resultado != ""){
      setResultado("");
    }
    if(operador === ""){
      setPrimeiroNumero((anterior) => anterior + valor);
    }else{
      setSegundoNumero((anterior) => anterior + valor);
    }
  }

  function handleOperador(op) {
  if (primeiroNumero === "") return;

  if (segundoNumero === "") {
    setOperador(op);
    return;
  }

  const n1 = Number(primeiroNumero);
  const n2 = Number(segundoNumero);

  const parcial = calcular(n1, operador, n2);

  setPrimeiroNumero(String(parcial));
  setSegundoNumero("");
  setOperador(op);
  }

  function handleLimpar(){
    setPrimeiroNumero("");
    setOperador("");
    setSegundoNumero("");
    setResultado("");
  }
  function apagarUltimo() {

  if (segundoNumero !== "") {
    setSegundoNumero(segundoNumero.slice(0, -1));

  }else if (primeiroNumero === "" & segundoNumero === "" & operador === ""){
      handleLimpar();

  }else if (operador !== "") {
   setOperador("");

  }else {
    setPrimeiroNumero(primeiroNumero.slice(0, -1));
  }
}

  function handleVirgula(){
    if(operador === ""){
      if(!primeiroNumero.includes(".")){
        setPrimeiroNumero((numero) => numero + ".");
      }
    }else{
      if(!segundoNumero.includes(".")){
        setSegundoNumero((numero) => numero + ".");
      }
    }
  }

  function calcular(n1, op, n2) {
    switch (op) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "X":
            return n1 * n2;
        case "/":
            return n1 / n2;
      case "%":
        return (n1 * n2 ) / 100 ;
        default:
            return n1;
    }
  }

  function handleResultado() {
  if (primeiroNumero === "" || operador === "" || segundoNumero === "") return;

  const n1 = Number(primeiroNumero);
  const n2 = Number(segundoNumero);

  const resultado = calcular(n1, operador, n2);
  const resultadoFinal = Number.isInteger(resultado)
    ? resultado
    : resultado.toFixed(2);

  handleLimpar();

  setResultado(`${resultadoFinal}`);

  setHistorico((prev) => [
    ...prev,
    `${n1} ${operador} ${n2} = ${resultadoFinal}`
  ]);
}

  return (
    <>

    <div className="container">

        <Historico
          historico={historico}
          historicoAberto={historicoAberto}
          setHistoricoAberto={setHistoricoAberto}

        />
      <div className="calculadora">

        <Visor
        primeiroNumero={primeiroNumero}
        operador={operador}
        segundoNumero={segundoNumero}
        resultado={resultado}
        apagarUltimo={apagarUltimo}


        />
        <Botoes

          primeiroNumero={primeiroNumero}
          setPrimeiroNumero={setPrimeiroNumero}

          operador={operador}
          setOperador={setOperador}

          segundoNumero={segundoNumero}
          setSegundoNumero={setSegundoNumero}

          resultado={resultado}
          setResultado={setResultado}

          handleNumero={handleNumero}
          handleOperador={handleOperador}
          handleLimpar={handleLimpar}
          handleVirgula={handleVirgula}
          handleResultado={handleResultado}

        />

      </div>
    </div>

    </>
  )
}

export default App
