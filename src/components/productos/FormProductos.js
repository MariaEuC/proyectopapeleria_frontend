import React, { useEffect, useState } from 'react'

function FormProductos(props) {
    const { getProduct, setProduct, onSave } = (props);
    const [producto, setProducto] = useState({
        _id: null,
        nombreprod: "",
        codigo: "",
        cantidad: "",
        precioCompra: "",
        precioVenta: "",
        stockMinimo: "",
        descripcion: "",
        unidadMedida: ""
    })

    useEffect(() => {
        if (setProduct)
            setProducto(setProduct);
    }, [setProduct])


    const handleChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
        getProduct(producto);
    }

    const guardar = (e) => {
        e.preventDefault();
        onSave(producto);
    }
    const limpiar = () => {
        setProducto({
            _id: null,
            nombreprod: "",
            codigo: "",
            cantidad: "",
            precioCompra: "",
            precioVenta: "",
            stockMinimo: "",
            descripcion: "",
            unidadMedida: ""
        })
    }

    return (
        <div>
            <form>
                <div className='row'>

                    <div className='col-md-2'>
                        <label className='form-label'>Código:</label>
                        <input className='form-control' type="text" name="codigo" value={producto.codigo} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='col-md-6'>
                        <label className='form-label'>Producto:</label>
                        <input className='form-control' type="text" name="nombreprod" value={producto.nombreprod} onChange={(e) => handleChange(e)} />
                    </div>

                </div>

                <div className='row'>

                    <div className='col-md-4'>
                        <label className='form-label'>Precio de compra:</label>
                        <input className='form-control' type="text" name="precioCompra" value={producto.precioCompra} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className='col-md-4'>
                        <label className='form-label'>Precio de venta:</label>
                        <input className='form-control' type="text" name="precioVenta" value={producto.precioVenta} onChange={(e) => handleChange(e)} />
                    </div>
                </div>


                <div className='row'>

                    <div className='col-md-4'>
                        <label className='form-label'>Unidad de Medida:</label>
                        <input className='form-control' type="text" name="unidadMedida" value={producto.unidadMedida} onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='col-md-2'>
                        <div>
                            <label className='form-label'>Inventario mínimo:</label>
                            <input className='form-control' type="text" name="stockMinimo" value={producto.stockMinimo} onChange={(e) => handleChange(e)} />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <label className='form-label'>Cantidad:</label>
                        <input className='form-control' type="text" name="cantidad" value={producto.cantidad} onChange={(e) => handleChange(e)} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        <label className='form-label'>Descripcion:</label>
                        <input className='form-control' type="text" name="descripcion" value={producto.descripcion} onChange={(e) => handleChange(e)} />
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

export default FormProductos