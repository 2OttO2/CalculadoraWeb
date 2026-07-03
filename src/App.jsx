import { useState } from 'react'
import Visor from "./Widgets/Visor/Visor.jsx";
import Botoes from "./Widgets/Botoes/Botoes.jsx";

import './App.css'

function App() {


  return (
    <>
      <Visor
      primeiroNumero={"2"}
      operador={"+"}
      segundoNumero={"3"}
      resultado={"67"}


      />
      <Botoes/>



    </>
  )
}

export default App
