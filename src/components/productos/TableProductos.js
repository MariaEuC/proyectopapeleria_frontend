import React from 'react'

function TableProductos(props) {
    const { productos, onDelete, onView } = props;
    return (


        <table className="table table-bordered">
            <thead >
                <tr class="table-primary">
                    <th scope='col'>Producto</th>
                    <th scope='col'>Código</th>
                    <th scope='col'>Cantidad</th>
                    <th scope='col'>Precio de compra</th>
                    <th scope='col'>Precio de venta</th>
                    <th scope='col'>Mínimo inventario</th>
                    <th scope='col'>Descripción</th>
                    <th scope="col">Unidad de Medida</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => {
                    return (<tr key={producto._id}>
                        <td>{producto.nombreprod}</td>
                        <td>{producto.codigo}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precioCompra}</td>
                        <td>{producto.precioVenta}</td>
                        <td>{producto.stockMinimo}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.unidadMedida}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => onDelete(producto._id)}>Eliminar</button>
                            <button className="btn btn-secondary" onClick={() => onView(producto)}>Ver</button> {/*Modificar */}
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>

    )
}

export default TableProductos