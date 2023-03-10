// const url = 'http://localhost:5000/usuarios/';
const url = 'https://proyectopapeleria-backend.onrender.com/usuarios/';

export async function listarUsuarios() {
    const res = await fetch(url);
    const data = await res.json();
    return data.usuarios;
}

export async function crearUsuario(usuario) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data
}

export async function actualizarUsuario(usuario) {
    const res = await fetch(url, {
        method: 'PATCH',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data;
}

export async function eliminarUsuario(id) {
    const res = await fetch(url + `${id}`, {
        method: 'DELETE',
        header: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    return data;
}

export async function login(usuario) {
    const res = await fetch(url + 'login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario)
    });
    const data = await res.json();
    return data
}