import React from 'react'
import DataAuditoria from '../dataAuditoria/DataAuditoria'
import FormAuditoria from '../formAuditoria/FormAuditoria'
import './Auditoria.css'

const Auditoria = () => {
  return (
    <div className='fondoa'>
      <h2>Finanzas</h2>
      <h5>Auditoria de Folios</h5>
      <FormAuditoria />
      <DataAuditoria />
    </div>
  )
}

export default Auditoria