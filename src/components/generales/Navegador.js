import React from 'react'

function Navegador() {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs'>
                    <li className='nave-item'><a className='nav-link active' href='/'>Home</a></li>
                    <li className='nave-item'><a className='nav-link active' href='/personas'>Personas</a></li>
                    <li className='nave-item'><a className='nav-link active' href='/usuarios'>Usuarios</a></li>
                    <li className='nave-item'><a className='nav-link active' href='/productos'>Productos</a></li>
                </ul>



            </nav>
        </header>
    )
}

export default Navegador