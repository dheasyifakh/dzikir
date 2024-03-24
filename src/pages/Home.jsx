import React from 'react'
import { Link } from 'react-router-dom'
import TypeWriter from '../components/TypeWriter'
const Home = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-6 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl  text-gray-900 sm:text-4xl"><TypeWriter text="ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ" delay={100}/></h2>
          <h2 className="font-bold text-gray-900 sm:text-4xl md:text-8xl mt-5"><TypeWriter text="Dzikir Pagi & Petang" delay={300}/></h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Panduan untuk dzikir Pagi dan Petang
            </p>
          </div>
          <div className="mt-8 sm:mt-12 md:px-80 lg:px-80 sm:px-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {/* <div className="h-32 rounded-lg bg-gray-200"></div> */}
              <div className="flex md:justify-end sm:justify-center sm:items-center sm:flex sm:gap-4">
                    <Link
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/pagi" 
                    >
                    Dzikir Pagi
                    </Link>

                </div>
              <div className="flex justify-start sm:flex sm:gap-4">
                    <Link
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        to="/petang"
                    >
                    Dzikir Petang
                    </Link>

                </div>
              {/* <div className="h-32 rounded-lg bg-gray-200"></div> */}
            </div>
            
          </div>
          
        </div>
      </section>
  )
}

export default Home