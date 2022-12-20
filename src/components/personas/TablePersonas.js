import React from 'react'

function TablePersonas(props) {
    const { personas, onDelete, onView } = props;
    return (

        <table className="table table-bordered">
            <thead >
                <tr class="table-primary">
                    <th scope='col'>Nombres</th>
                    <th scope='col'>Apellidos</th>
                    <th scope='col'>Tipo de Documento</th>
                    <th scope='col'>Número de Documento</th>
                    <th scope='col'>Dirección</th>
                    <th scope='col'>Teléfono</th>
                    <th scope='col'>Correo</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map((persona) => {
                    return (<tr key={persona._id}>
                        <td>{persona.nombres}</td>
                        <td>{persona.apellidos}</td>
                        <td>{persona.tipoDoc}</td>
                        <td>{persona.numDoc}</td>
                        <td>{persona.direccion}</td>
                        <td>{persona.telefono}</td>
                        <td>{persona.correo}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => onDelete(persona._id)}>Eliminar</button>
                            <button className="btn btn-secondary" onClick={() => onView(persona)}>Ver</button> {/*Modificar */}
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default TablePersonas