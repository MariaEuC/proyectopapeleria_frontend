import React, { useState } from 'react'
import TableProductos from './TableProductos'
import FormProductos from "./FormProductos";
import Navegador from '../generales/Navegador';
import { actualizarProducto, crearProducto, eliminarProducto, listarProductos } from '../../API/ProductosAPI';

function Productos() {
    const [mostrarListForm, setmostrarListForm] = useState(true);
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null);


    const actualizarLista = () => {
        listarProductos()
            .then((data) => {
                setProductos(data)
            })
            .catch((err) => { console.log(err) });
    }

    if (productos.length === 0) {
        actualizarLista();
    }


    const guardarProducto = (producto) => {
        console.log(producto);
        if (producto._id === null) {
            crearProducto(producto).then((data) => {
                actualizarLista();
                console.log(data);

            }).catch((err) => { console.log(err) });
        }
        else {
            actualizarProducto(producto).then((data) => {
                actualizarLista();
                console.log(data);

            }).catch((err) => { console.log(err) });
        }
        setmostrarListForm(true);
    };


    const deleteProducto = (id) => {
        console.log(producto);
        return eliminarProducto(id).then((data) => {
            if (data.deletedCount === 1)
                actualizarLista();
            console.log(data);

        }).catch((err) => { console.log(err) });
    };
    const verProducto = (producto) => {
        console.log(producto);
        setProducto(producto);
        setmostrarListForm(false);
    };

    const verListaProductos = () => {
        setProducto({
            _id: null,
            nombreprod: "",
            codigo: "",
            cantidad: "",
            precioCompra: "",
            precioVenta: "",
            stockMinimo: "",
            descripicion: "",
            unidadMedida: ""
        });
        setmostrarListForm(true);
    }


    return (
        <div>
            <Navegador />
            <div>
                {!mostrarListForm && <button className="btn btn-primary" onClick={verListaProductos}>Ver lista de productos</button>}
                {mostrarListForm && <button className="btn btn-primary" onClick={() => { setmostrarListForm(false) }}>Crear nuevo producto</button>}
                {/* <button>Limpiar</button> */}
            </div>
            {!mostrarListForm && <div>
                <FormProductos setProducto={producto} onSave={guardarProducto} />

            </div>
            }

            {mostrarListForm && <TableProductos productos={productos} onDelete={deleteProducto} onView={verProducto} />}

        </div >
    )
}

export default Productos

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