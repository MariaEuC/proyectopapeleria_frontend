import React, { useState } from 'react'
import { actualizarUsuario, crearUsuario, eliminarUsuario, listarUsuarios } from '../../API/UsuariosAPI';
import Navegador from '../generales/Navegador';
import FormUsuarios from './FormUsuarios';
import TableUsuarios from './TableUsuarios';

function Usuarios() {
    const [mostrarListForm, setmostrarListForm] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState(null);


    const actualizarLista = () => {
        listarUsuarios()
            .then((data) => {
                setUsuarios(data)
            })
            .catch((err) => { console.log(err) });
    }

    if (usuarios.length === 0) {
        actualizarLista();
    }


    const guardarUsuario = (usuario) => {
        console.log(usuario);
        if (usuario._id === null) {
            crearUsuario(usuario).then((data) => {
                actualizarLista();
                console.log(data);

            }).catch((err) => { console.log(err) });
        }
        else {
            actualizarUsuario(usuario).then((data) => {
                actualizarLista();
                console.log(data);

            }).catch((err) => { console.log(err) });
        }
        setmostrarListForm(true);
    };


    const deleteUsuario = (id) => {
        console.log(usuario);
        return eliminarUsuario(id).then((data) => {
            if (data.deletedCount === 1)
                actualizarLista();
            console.log(data);

        }).catch((err) => { console.log(err) });
    };
    const verUsuario = (usuario) => {
        console.log(usuario);
        setUsuario(usuario);
        setmostrarListForm(false);
    };

    const verListaUsuarios = () => {
        setUsuario({
            _id: null,
            usuario: "",
            clave: "",
            rol: "-",
            estado: "-",
            persona: {
                _id: "",
                correo: ""
            }
        });
        setmostrarListForm(true);
    }


    return (
        <div><Navegador />Usuarios

            <div>
                {!mostrarListForm && <button className="btn btn-primary" onClick={verListaUsuarios}>Ver lista de usuarios</button>}
                {mostrarListForm && <button className="btn btn-primary" onClick={() => { setmostrarListForm(false) }}>Crear nuevo usuario</button>}
                {/* <button>Limpiar</button> */}
            </div>
            {!mostrarListForm && <div>
                <FormUsuarios setUser={usuario} onSave={guardarUsuario} />

            </div>
            }

            {mostrarListForm && <TableUsuarios usuarios={usuarios} onDelete={deleteUsuario} onView={verUsuario} />}




        </div>
    )
}

export default Usuarios