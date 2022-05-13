import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [elemento, setelemento] = useState("Piedra Papel o Tijera")
  const [resultado, setresultado] = useState("")
  const [selection, setselection] = useState("")

  // Seleccion de la maquina a partir de un numero aleatorio
  const numberCondition = (numero) => {
    if (numero === 0) {
      setelemento("Piedra")
    } else if (numero === 1) {
      setelemento("Papel")
    } else if (numero === 2) {
      setelemento("Tijera")
    }
  }

  // Condiciones
  const winCondition = (elemento, selection) => {
    // Condiciones para perder
    if (elemento === "Piedra" && selection === "Tijera") {
      setresultado("Perdiste")
    } else if (elemento === "Papel" && selection === "Piedra") {
      setresultado("Perdiste")
    } else if (elemento === "Tijera" && selection === "Papel") {
      setresultado("Perdiste")
    }
    // Condiciones para ganar
    else if (elemento === "Piedra" && selection === "Papel") {
      setresultado("Ganaste")
    } else if (elemento === "Papel" && selection === "Tijera") {
      setresultado("Ganaste")
    } else if (elemento === "Tijera" && selection === "Piedra") {
      setresultado("Ganaste")
    }
    // Condiciones para empatar
    else if (elemento === "Piedra" && selection === "Piedra") {
      setresultado("Empate")
    } else if (elemento === "Papel" && selection === "Papel") {
      setresultado("Empate")
    } else if (elemento === "Tijera" && selection === "Tijera") {
      setresultado("Empate")
    }
  }

  const getRandom = () => {
    let numero = Math.floor(Math.random() * 3);
    numberCondition(numero)
  }

  const piedra = () => {
    getRandom()
    setselection("Piedra")
  }

  const papel = () => {
    getRandom()
    setselection("Papel")
  }

  const tijera = () => {
    setselection("Tijera")
    getRandom()
  }

  useEffect(() => {
    winCondition(elemento, selection)
  }, [elemento, selection])

  return (
    <div className="App">
      <h1>{elemento}</h1>
      <h2>{resultado}</h2>
      <button onClick={piedra}>Piedra</button>
      <button onClick={papel}>Papel</button>
      <button onClick={tijera}>Tijera</button>
    </div>
  );
}

export default App;
