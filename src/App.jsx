import { useState,useEffect,useRef } from 'react'
import Visor from "./Widgets/Visor/Visor.jsx";
import Botoes from "./Widgets/Botoes/Botoes.jsx";
import Historico from "./Widgets/Historico/Historico.jsx";
import owlSound from "./sounds/owl.mp3";
import cockSound from "./sounds/cock.mp3";
import marcadorSound from "./sounds/Marcador.mp3";

import './App.css'

function App() {

const [primeiroNumero,setPrimeiroNumero] = useState("");
const [operador,setOperador] = useState("");
const [segundoNumero,setSegundoNumero] = useState("");
const [resultado,setResultado] = useState("");
const [historico,setHistorico] = useState([]);
const [historicoAberto,setHistoricoAberto] = useState(true);
const [tema,setTema] = useState(false);

const clickSoundOwl = useRef(new Audio(owlSound));
const clickSoundCock = useRef(new Audio(cockSound));
const clickSoundMarcador = useRef(new Audio(marcadorSound));

const [mutado,setMutado] = useState(false);
const botaoMute = useRef(null);
const botaoTema = useRef(null);
const [botaoAtivo,setBotaoAtivo] = useState("");
const botaoDeletarHistorico = useRef(null);

  useEffect(() => {
    const historicoSalvo = localStorage.getItem("historico");

    if(historicoSalvo){
      setHistorico(JSON.parse(historicoSalvo));
    }

  },[]);

  useEffect(() => {
    localStorage.setItem("historico",JSON.stringify(historico));
  },[historico]);


  useEffect(() => {
      const temaSalvo = JSON.parse(localStorage.getItem("tema"));

      if(temaSalvo !== null){
      setTema(temaSalvo);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("tema",JSON.stringify(tema));
  },[tema]);

  useEffect(() => {
    const muteSalvo = localStorage.getItem("mutado");

    if(muteSalvo !== null){
      setMutado(JSON.parse(muteSalvo));
    }
  },[]);
  
  useEffect(() => {
    localStorage.setItem("mutado",JSON.stringify(mutado));
  },[mutado]);


  useEffect(() => {
      document.documentElement.className = tema ? "" : "temaEscuro";
    },[tema]);
  
  function limparHistorico (setHistorico){
    if(window.confirm("ARU RLY SUREEEEEEEE?")){
      setHistorico([]);

    }

  }
  
  function tocarSomMarcador(){
    if(!mutado){
    clickSoundMarcador.current.currentTime = 0;
    clickSoundMarcador.play();
    }else{
      return;
    }
  }

  function tocarSomOwl(){
    if(!mutado){
    clickSoundOwl.current.currentTime = 0;
    clickSoundOwl.current.play();
    }else{
      return;
    }
  }

   function tocarSomCock(){
    if(!mutado){
    clickSoundCock.currentTime = 0;
    clickSoundCock.current.play();
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

      if(tecla.repeat) return;

      switch(tecla.key){
        case "m":
        case "M":
          botaoMute.current.click();
          setBotaoAtivo("M");
          break;
        case "h":
        case "H":
        setHistoricoAberto((prev) => !prev);
        tocarSomMarcador();
          break;
        case "t":
        case "T":
        botaoTema.current.click();
          break;
        case "b":
        case "B":
        limparHistorico(setHistorico);
        default:
          break;

      }
    };
     const handleKeyUp = () => {
      setBotaoAtivo("");
    };
    
    window.addEventListener("keyup",handleKeyUp);
    window.addEventListener("keydown",handleKeyDown);

      return() => {
        window.removeEventListener("keyup", handleKeyUp);
        window.removeEventListener("keydown", handleKeyDown);
    };
  },[])



  return (
    <>
    <div className={tema ? "containerBotaoTemaClaro" : "containerBotaoTemaEscuro"}>
      <p className ="lua">☀️</p>

      <button ref={botaoTema} className={tema ? "botaoTemaClaro" : "botaoTemaEscuro"}
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

        <button ref={botaoDeletarHistorico} className={"deletarHistorico"}
        onClick={() => limparHistorico(setHistorico)}
        >
        🗑️📜
        </button>

        <button ref={botaoMute} className={botaoAtivo === "M" ? "botaoMuteAtivo" : "botaoMute"} onClick={() => setMutado(!mutado)}>
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

          handleNumero={handleNumero}
          handleOperador={handleOperador}
          handleLimpar={handleLimpar}
          
          handleVirgula={handleVirgula}
          handleResultado={handleResultado}

          apagarUltimo={apagarUltimo}
          mutado={mutado}

        />

      </div>
    </div>

    </>
  )
}

export default App
