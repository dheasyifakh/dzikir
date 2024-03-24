import React from 'react'
import logo from '../assets/dzikir.png'
const Navbar = () => {
  return (
    <header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
            <span className="sr-only">Home</span>
            <img src={logo} width="80"/>
            </a>
        </div>

        <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/dzikr/pagi">Pagi</a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/dzikr/petang">Petang</a>
                </li>


                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                </li>

                <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
                </li>
            </ul>
            </nav>

            <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
                <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="#"
                >
                Login
                </a>

            </div>

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