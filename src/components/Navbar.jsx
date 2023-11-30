import React, { useState } from 'react'
import logo from '/assets/Odyssey.svg'
import Button from './Button'
import { Link } from 'react-scroll';

// icons 
import { MdOutlineWidgets, MdOutlineClose } from "react-icons/md";

export default function Navbar() {
  const navItems = [
    {link: "Home", path: "home"},
    {link: "Community", path: "community"},
    {link: "Education", path: "education"},
    {link: "Stay Connected", path: "contact"}
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
    <nav className='bg-white flex justify-between items-center px-4 py-2 lg:px-12 w-screen fixed top-0 right-0 left-0'>
      <div >
          <a href='/'><img className='w-48' src={logo}/></a>
      </div>

      <div className='hidden md:flex cursor-pointer'>
        <ul className='md:flex items-center'>
          {navItems.map(({link, path}) => {
            return <Link key={path} to={path} activeClass='active' spy={true} smooth={true} offset={-60} className='md:text-sm md:mr-4 lg:text-base font-semibold hover:text-gray-500'>{link}</Link>
          })}
        </ul>
        <Button text="Sign in" color="bg-black-bold" link="/signin"/>
      </div>

      {/* menu button display only for mobile devices */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
        {isMenuOpen ? <MdOutlineClose className='h-8 w-8 text-black-bold'/> : <MdOutlineWidgets className='h-8 w-8  text-black-bold'/>}
        </button>
      </div>  
    </nav>

    {/* menu options for mobile devices */}
    <div className={`bg-white md:hidden space-y-4 px-4 pt-24 pb-5 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
      {navItems.map(({link, path}) => {
        return <Link to={path} key={path} activeClass='active' spy={true} smooth={true} offset={-60} onClick={toggleMenu} className='block font-semibold hover:text-gray-500'>{link}</Link>
      })}
      <a href='/signin' className='block font-semibold hover:text-gray-500'>Sign in</a>
    </div>
    </>
  )
}

