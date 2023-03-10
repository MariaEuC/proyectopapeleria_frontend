// const url = 'http://localhost:5000/productos/';
const url = 'https://proyectopapeleria-backend.onrender.com/productos/';

export async function listarProductos() {
    const res = await fetch(url);
    const data = await res.json();
    return data.productos;
}

export async function crearProducto(producto) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    });
    const data = await res.json();
    return data
}

export async function actualizarProducto(producto) {
    const res = await fetch(url, {
        method: 'PATCH',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
    });
    const data = await res.json();
    return data;
}

export async function eliminarProducto(id) {
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        header: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    return data;
}