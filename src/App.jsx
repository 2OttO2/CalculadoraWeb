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

  function handleOperador(op){
    if(primeiroNumero === "") return;

    if(segundoNumero === ""){
      setOperador(op);
      return;
    } 
    
  }

  function handleLimpar(){
    setPrimeiroNumero("");
    setOperador("");
    setSegundoNumero("");
    setResultado("");
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

  function handleResultado(){
    const n1 = Number(primeiroNumero);
    const n2 = Number(segundoNumero);
    let resultadoFinal;

    
      switch(operador){
          
        case "+":
        resultadoFinal = n1 + n2;
        break;
        
        case "-":
        resultadoFinal = n1 - n2;
        break;

        case "/":
        resultadoFinal = n1 / n2;
        break;
        
        case "X":
        resultadoFinal = n1 * n2;
        break;

        default:
        return;
      }
    handleLimpar();
    setResultado(`RESULTADO = ${resultadoFinal}`);
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
