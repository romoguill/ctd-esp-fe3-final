import React from 'react'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <h2><span>D</span>H Odonto</h2>
      <div className='links'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contacto'>Contact</Link></li>
          <li><Link to='/favoritos'>Favs</Link></li>
        </ul>
      </div>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar