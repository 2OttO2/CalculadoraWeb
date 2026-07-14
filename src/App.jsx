import { useState,useEffect } from 'react'
import Visor from "./Widgets/Visor/Visor.jsx";
import Botoes from "./Widgets/Botoes/Botoes.jsx";
import Historico from "./Widgets/Historico/Historico.jsx";
import owlSound from "./sounds/owl.mp3";
import cockSound from "./sounds/cock.mp3";

import './App.css'

function App() {

const [primeiroNumero,setPrimeiroNumero] = useState("");
const [operador,setOperador] = useState("");
const [segundoNumero,setSegundoNumero] = useState("");
const [resultado,setResultado] = useState("");
const [historico,setHistorico] = useState([]);
const [historicoAberto,setHistoricoAberto] = useState(true);
const [tema,setTema] = useState(false);
const clickSoundOwl = new Audio(owlSound);
const clickSoundCock = new Audio(cockSound);
const [mutado,setMutado] = useState(false);


 
  useEffect(() => {
      document.documentElement.className = tema ? "" : "temaEscuro";
    },[tema]);
  

  function tocarSomOwl(){
    if(!mutado){
    clickSoundOwl.currentTime = 0;
    clickSoundOwl.cloneNode().play();
    }else{
      return;
    }
  }

   function tocarSomCock(){
    if(!mutado){
    clickSoundCock.currentTime = 0;
    clickSoundCock.cloneNode().play();
    }else{
      return;
    }
  }


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

   useEffect(() =>{
    const handleKeyDown = (tecla) => {

      switch(tecla.key){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          handleNumero(tecla.key);
          break;

        case "+":
        case "-":
        case "X":
        case "/":
          handleOperador(tecla);
          break;
        
        case ".":
        case ",":
          handleVirgula(tecla.key);
          break;


        case "Enter":
        case "=":
          handleResultado(tecla.key);
          break;
  
        case "Backspace":
          apagarUltimo(tecla.key);
          break;

        case "Escape":
          handleLimpar(tecla.key);
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


  return (
    <>
    <div className={tema ? "containerBotaoTemaClaro" : "containerBotaoTemaEscuro"}>
      <p className ="lua">☀️</p>

      <button className={tema ? "botaoTemaClaro" : "botaoTemaEscuro"}
        onClick={() => {
          !tema ? tocarSomCock() : tocarSomOwl();
          setTema(!tema);
        }
      }
        >
          {tema ? "☀️" : "🌙"}
      </button>

      <p className="sol">🌙</p>


    </div>

    <div className="containerBotaoMute">
        <button className="botaoMute" onClick={() => setMutado(!mutado)}>
          {mutado ? "🔇" : "🔊"}
        </button>
    </div>

    <div className="container">

        <Historico
          historico={historico}
          historicoAberto={historicoAberto}
          setHistoricoAberto={setHistoricoAberto}
          mutado={mutado}

        />
      <div className="calculadora">

        <Visor
        primeiroNumero={primeiroNumero}
        operador={operador}
        segundoNumero={segundoNumero}
        resultado={resultado}
        apagarUltimo={apagarUltimo}
        mutado={mutado}

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

          mutado={mutado}

        />

      </div>
    </div>

    </>
  )
}

export default App
