import React from 'react'
import logo from '../assets/dzikir.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-teal-600">
            <span className="sr-only">Home</span>
            <img src={logo} width="80"/>
            </Link>
            
        </div>

        <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
                <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" to="/pagi">Pagi</Link>
                </li>

                <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" to="/petang">Petang</Link>
                </li>
            </ul>
            </nav>

            <div className="flex items-center gap-4">
            

            <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
               
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
</header>
  )
}

export default Navbar