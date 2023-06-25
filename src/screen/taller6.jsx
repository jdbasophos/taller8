'use client'
import { lightBlue } from '@material-ui/core/colors';
import React, { useState } from 'react'
const Taller6 = () => {

  const estiloH1 = {
    textAlign: 'center',
    paddingTop: '100px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '40px',
  };
  const bodyH1 = {
    textAlign: 'center',
    paddingTop: '20px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '40px',
  };

  const estiloBoton = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    cursor: 'pointer',
  };
  const [contador, setContador] = useState(0)
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const reiniciarContador = () => {
    setContador(0);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };
  return (
    <>
      <div style={{ backgroundColor: '#CDC6CF', height: 400, textAlign: 'center', }}>
        <div >
          <h1 style={estiloH1} >BIENVENIDO A USER RANDOM</h1>
          <h1 style={bodyH1} >Contador de usuario</h1>
          <h1 style={bodyH1} >{contador}</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button style={estiloBoton} onClick={aumentarContador}>
        Aumentar
      </button>
      <button style={estiloBoton} onClick={reiniciarContador}>
        Reiniciar
      </button>
      <button style={estiloBoton} onClick={disminuirContador}>
        Disminuir
      </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Taller6;