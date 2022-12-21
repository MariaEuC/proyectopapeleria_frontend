import React, { useEffect, useState } from 'react';

function FormUsuarios(props) {
  const { getUser, setUser, onSave } = props;
  const [usuario, setUsuario] = useState({
    _id: null,
    usuario: "",
    clave: "",
    rol: "-",
    estado: "-",
    persona: {
      _id: "",
      correo: ""
    }
  })

  useEffect(() => {
    if (setUser)
      setUsuario(setUser);
  }, [setUser])


  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
    getUser(usuario);
  }

  const handleChangePersona = (e) => {
    setUsuario({ ...usuario, persona: { [e.target.name]: e.target.value } });
    getUser(usuario);
  }

  const guardar = (e) => {
    e.preventDefault();
    onSave(usuario);
  }

  const limpiar = () => {
    setUsuario({
      _id: null,
      usuario: "",
      clave: "",
      rol: "",
      estado: "-",
      persona: {
        _id: "",
        correo: ""
      }
    })
  }


  return (
    <div>
      <form>
        <div className='row'>
          <div className='col-md-6'>
            <label className='form-label'>Usuario:</label>
            <input className='form-control' type="text" name="usuario" value={usuario.usuario} onChange={(e) => handleChange(e)} />
          </div>
          <div className='col-md-6'>
            <label className='form-label'>Clave:</label>
            <input className='form-control' type="text" name="clave" value={usuario.clave} onChange={(e) => handleChange(e)} />
          </div>

          <div className='row'>
            <div className='col-md-6'>
              <label className='form-label'>Rol:</label>
              <select className='form-select' name="rol" value={usuario.rol} onChange={(e) => handleChange(e)} >
                <option value="-"> Seleccione </option>
                <option value="Administrador">Administrador</option>
                <option value="Cajero">Cajero</option>
                <option value="Vendedor">Vendedor</option>
              </select>
            </div>

            <div className='col-md-6'>
              <label className='form-label'>Estado:</label>
              <select className='form-select' name="estado" value={usuario.estado} onChange={(e) => handleChange(e)} >
                <option value="-"> Seleccione </option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>

          <div className='col-md-6'>
            <label className='form-label'>Correo:</label>
            <input className='form-control' type="text" name="correo" value={usuario.persona.correo} onChange={(e) => handleChangePersona(e)} />
          </div>
        </div>
      </form>
      <button className="btn btn-dark" onClick={guardar}>Guardar</button>
      <button className="btn btn-dark" onClick={limpiar}>Limpiar</button>

    </div>
  )
}

export default FormUsuarios