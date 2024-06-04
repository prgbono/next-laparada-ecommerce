import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <Link href="/" className="btn btn-ghost text-lg">
            Mariscos La Parada
          </Link>
          <ul className="flex">
            <li>
              <Link href="/cart" className="btn btn-ghost rounded-btn">
                Cesta
              </Link>
              <Link href="/signin" className="btn btn-ghost rounded-btn">
                Entrar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
