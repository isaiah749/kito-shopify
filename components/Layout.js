import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
    <Nav />
    <main className="">
        {children}
    </main>

    <footer className=''>
        <Footer />
    </footer>

    </div>
  )
}
