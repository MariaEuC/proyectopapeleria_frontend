import React from 'react'

function Navegador() {
    return (
        <header>
            <nav>
                <ul className='nav nav-tabs'>
                    <li><a className='nav-link' href='/'>Home</a></li>
                    <li><a className='nav-link' href='/personas'>Personas</a></li>
                    <li><a className='nav-link' href='/usuarios'>Usuarios</a></li>
                </ul>



            </nav>
        </header>
    )
}

export default Navegador