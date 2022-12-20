import React, { useState } from 'react';
import { login } from '../../API/UsuariosAPI';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navegador = useNavigate();
    const [usuario, setUsuario] = useState({
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

    localStorage.clear();

    const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
        console.log(usuario);
    }

    const enviarLogin = (e) => {
        e.preventDefault();
        console.log(usuario);
        login(usuario).then((data) => {
            if (data === null) {

                swal({
                    title: "Error",
                    text: "Datos incorrectos, verificar datos ingresados",
                    icon: "error"

                });
            }
            else {
                localStorage.setItem("usuarioActivo", JSON.stringify(data));
                navegador("/");
            }
            console.log(data);

        }).catch((err) => { console.log(err) });
    };


    return (
        <form>
            <div className='form-group'>
                <label className='form-label'>Usuario:</label>
                <input className='form-control' type="text" name="usuario" value={usuario.usuario} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label className='form-label'>Clave:</label>
                <input className='form-control' type="text" name="clave" value={usuario.clave} onChange={(e) => handleChange(e)} />
            </div>

            <button className="btn btn-primary" onClick={enviarLogin}>Ingresar</button>
        </form>
    )
}
export default Login

// value={usuario.rol}