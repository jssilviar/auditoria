import React from 'react'
import './FormAuditoria.css'

const FormAuditoria = () => {
  return (
    <div className='fondo'>
       <form className='container'>
          <div>
              <label htmlFor="folios">Folios/DO/Órdenes/F12</label>
              <textarea type="number" id="folios" placeholder="" min={-9} max={9}/>
          </div>
          <div>
              <label htmlFor="exampleFormControlInput1">Rut vendedor</label>
              <input type="text" id="exampleFormControlInput1" placeholder="" />
          </div>
          <div>
              <label htmlFor="exampleFormControlInput2" >Empresa</label>
              <input type="text" id="exampleFormControlInput2" placeholder="" value="0" readOnly/>
              {/*<label htmlFor="">País</label>
              <select aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="0">Falabella</option>
                  <option value="1">Sodimac</option> 
              </select> */}
          </div>
          <div>
              <label htmlFor="exampleFormControlInput3">País</label>
              <input type="text" id="exampleFormControlInput3" placeholder="" value="CL" readOnly/>
              {/*<label htmlFor="" >País</label>
              <select aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">Cl</option>
                  <option value="2">CO</option>
                  <option value="3">PE</option>
                  <option value="4">AR</option> 
              </select> */}
          </div>
          <div>
              <button type="button" className='boton'>Buscar</button>
          </div>
       </form>
    </div>
  )
}

export default FormAuditoria