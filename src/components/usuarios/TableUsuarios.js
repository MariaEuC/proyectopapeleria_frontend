import React from 'react'

function TableUsuarios(props) {
    const { usuarios, onDelete, onView } = props;
    return (
        <table className="table table-bordered">
            <thead >
                <tr class="table-primary">
                    <th scope='col'>Usuario</th>
                    <th scope='col'>Clave</th>
                    <th scope='col'>Rol</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'>Correo</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => {
                    return (<tr key={usuario._id}>
                        <td>{usuario.usuario}</td>
                        <td>{usuario.clave}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.estado}</td>
                        <td>{usuario.persona.correo}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => onDelete(usuario._id)}>Eliminar</button>
                            <button className="btn btn-secondary" onClick={() => onView(usuario)}>Ver</button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default TableUsuarios