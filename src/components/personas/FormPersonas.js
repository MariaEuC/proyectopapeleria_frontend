import React, { useEffect, useState } from 'react';

function FormPersonas(props) {
  const { getPerson, setPerson, onSave } = props;
  const [persona, setPersona] = useState({
    _id: null,
    nombres: "",
    apellidos: "",
    tipoDoc: "",
    numDoc: "",
    direccion: "",
    telefono: "",
    correo: ""
  })



  useEffect(() => {
    if (setPerson)
      setPersona(setPerson);
  }, [setPerson])


  const handleChange = (e) => {
    setPersona({ ...persona, [e.target.name]: e.target.value });
    getPerson(persona);
  }

  const guardar = (e) => {
    e.preventDefault();
    onSave(persona);
  }
  const limpiar = () => {
    setPersona({
      _id: null,
      nombres: "",
      apellidos: "",
      tipoDoc: "",
      numDoc: "",
      direccion: "",
      telefono: "",
      correo: ""
    })
  }

  return (
    <div>
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <label className='form-label'>Nombres:</label>
            <input className='form-control' type="text" name="nombres" value={persona.nombres} onChange={(e) => handleChange(e)} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Apellidos:</label>
            <input className='form-control' type="text" name="apellidos" value={persona.apellidos} onChange={(e) => handleChange(e)} />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <label className='form-label'>Tipo de Documento:</label>
            <select className='form-select' name="tipoDoc" value={persona.tipoDoc} onChange={(e) => handleChange(e)} >
              <option value="-"> Seleccione </option>
              <option value="CC">CC</option>
              <option value="NIT">NIT</option>
              <option value="CE">CE</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Número de Documento:</label>
            <input className='form-control' type="text" name="numDoc" value={persona.numDoc} onChange={(e) => handleChange(e)} />
          </div>

        </div>

        <div>
          <label className='form-label'>Dirección:</label>
          <input className='form-control' type="text" name="direccion" value={persona.direccion} onChange={(e) => handleChange(e)} />
        </div>

        <div className='row'>
          <div className='col-md-6'>


            <label className='form-label'>Teléfono:</label>
            <input className='form-control' type="text" name="telefono" value={persona.telefono} onChange={(e) => handleChange(e)} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Correo:</label>
            <input className='form-control' type="text" name="correo" value={persona.correo} onChange={(e) => handleChange(e)} />
          </div>
        </div>

        {/* <div>
            <label className='form-label'>:</label>
            <input className='form-control' type="text" name="" />
        </div> */}
      </form>

      <button className="btn btn-dark" onClick={guardar}>Guardar</button>
      <button className="btn btn-dark" onClick={limpiar}>Limpiar</button>
    </div>
  )
}

export default FormPersonas