import React from 'react'
import Logo from '../../assets/navbar/ce-logo.svg'
import Cart from '../../assets/navbar/cart-logo.svg'
import Search from '../../assets/navbar/search-logo.svg'
import './navbar.css'

export default () => (
  <header>
    <nav>
      <div>
        <span><img src={Logo} alt="Logo de cereno" loading="lazy" /></span>
      </div>
      <div>
        <span><img src={Cart} alt="Carrito de compra de cereno" loading="lazy" /></span>
      </div>
      <div>
        <span><img src={Search} alt="Menu de busqueda de cereno" loading="lazy" /></span>
      </div>
    </nav>
  </header>
)