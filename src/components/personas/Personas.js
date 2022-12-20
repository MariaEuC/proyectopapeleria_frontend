import React, { useState } from 'react'
import { listarPersonas, crearPersona, eliminarPersona, actualizarPersona } from '../../API/PersonasAPI';
import TablePersonas from './TablePersonas'
import FormPersonas from "./FormPersonas";
import Navegador from '../generales/Navegador';

function Personas() {
    const [mostrarListForm, setmostrarListForm] = useState(true);
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null);


    const actualizarLista = () => {
        listarPersonas()
            .then((data) => {
                setPersonas(data)
            })
            .catch((err) => { console.log(err) });
    }

    if (personas.length === 0) {
        actualizarLista();
    }


    const guardarPersona = (persona) => {
        console.log(persona);
        if (persona._id === null) {
            crearPersona(persona).then((data) => {
                actualizarLista();
                console.log(data);

            }).catch((err) => { console.log(err) });
        }
        else {
            actualizarPersona(persona).then((data) => {
                actualizarLista();
                console.log(data);

            }).catch((err) => { console.log(err) });
        }
        setmostrarListForm(true);
    };


    const deletePersona = (id) => {
        console.log(persona);
        return eliminarPersona(id).then((data) => {
            if (data.deletedCount === 1)
                actualizarLista();
            console.log(data);

        }).catch((err) => { console.log(err) });
    };
    const verPersona = (persona) => {
        console.log(persona);
        setPersona(persona);
        setmostrarListForm(false);
    };

    const verListaPersonas = () => {
        setPersona({
            _id: null,
            nombres: "",
            apellidos: "",
            tipoDoc: "",
            numDoc: "",
            direccion: "",
            telefono: "",
            correo: ""
        });
        setmostrarListForm(true);
    }


    return (
        <div>
            <Navegador />
            <div>
                {!mostrarListForm && <button className="btn btn-primary" onClick={verListaPersonas}>Ver lista de personas</button>}
                {mostrarListForm && <button className="btn btn-primary" onClick={() => { setmostrarListForm(false) }}>Crear nueva persona</button>}
                {/* <button>Limpiar</button> */}
            </div>
            {!mostrarListForm && <div>
                <FormPersonas setPerson={persona} onSave={guardarPersona} />

            </div>
            }

            {mostrarListForm && <TablePersonas personas={personas} onDelete={deletePersona} onView={verPersona} />}

        </div >
    )
}

export default Personas

// const borrarPersona = (id) => {
//     console.log(persona);
//     return eliminarPersona(id).then((data) => {
//         if(data.deletedCount === 1)
//             actualizarLista();
//         console.log(data);

//     }).catch((err) => { console.log(err) });
// };

// const deletePersona = (id) => {
    //     console.log(persona);
    //     eliminarPersona(id).then((data) => {
    //         actualizarLista();
    //         console.log(data);

    //     }).catch((err) => { console.log(err) });
    // };