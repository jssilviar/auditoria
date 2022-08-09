import {useState} from 'react';
import './App.css';
import { CSVLink } from 'react-csv'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import DataTable from 'react-data-table-component';
import { paginationOptions, titleTables } from './TitleTables';

function App() {

  const [formData, setFormData] = useState({
    countryCode: '',
    business: '',
    seller: '',
    sales: []
  });

  const [response, setResponse] = useState([]);

  const request = async () => {

    const url = `http://localhost:7071/api/finances/settlement/audit/report`;

    axios.post( url, formData)
      .then(function (response) {
        const {data} = response.data;
        setResponse(data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSelectChange = ({target}) => {
    const {name, value} = target;
    setFormData({
      ...formData,
      [name]: parseInt(value)
    })
  }

  const onTextAreaChange = ({target}) => {
    const {name, value} = target;
    const folios = value.split(',');
    setFormData({
      ...formData,
      [name]: folios
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    request();
    
  }

  return (
    <div className='container-fluid auditoriaBody'>
      {/* <h1>Finanzas</h1>
      <h2>Auditoria de Folios</h2> */}
      <nav className="navbar bg-light">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Finanzas</span>
        </div>
      </nav>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Auditoría de Folios</span>
        </div>
      </nav>
      <div className='row'>
        <form id="form-sidebar" onSubmit={ handleSubmit } className='col-3 collapse collapse-horizontal show border-end'>
          <textarea
            className="form-control mb-3"
            name='sales'
            onChange={onTextAreaChange}
            placeholder="Folios"
            id="sales" 
            required
            rows="15">
          </textarea>
          <div className="input-group mb-3">
            <span className="input-group-text">RUT</span>
            <input type="text" name='seller' className="form-control" aria-label="rut" onChange={ onInputChange }/>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text"  htmlFor="business">Negocio</label>
            <select className="form-select" id="business" type='text' name='business' onChange={onSelectChange} required>
              <option value=''>Selecciona</option>
              <option value={0}>Falabella</option>
              <option value={1} disabled>Sodimac</option>
            </select>
          </div>
          <div className="input-group mb-3" required>
            <label className="input-group-text"  htmlFor="countryCode">Pais</label>
            <select className="form-select" id="countryCode" type='text' name='countryCode' onChange={onInputChange} required>
              <option value=''>Selecciona</option>
              <option value="AR" disabled>Argentina</option>
              <option value="CL">Chile</option>
              <option value="CO" disabled>Colombia</option>
              <option value="PE" disabled>Perú</option>
            </select>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-success" type="submit">Buscar</button>
          </div>
        </form>
        <div className='col-9'>
          <button className='btn btn-success' data-bs-target="#form-sidebar" data-bs-toggle="collapse" >Mostrar</button>
          <DataTable
            columns={ titleTables }
            data={ response }
            pagination
            paginationComponentOptions={paginationOptions}
            fixedHeader
            highlightOnHover
            />
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <CSVLink data={response} filename={"response.csv"} className="text-success fs-5" >Exportar a CSV</CSVLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;