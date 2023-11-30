import { Link } from "react-scroll"

export default function Footer() {
  const navItems = [
    {link: "Home", path: "home"},
    {link: "Community", path: "community"},
    {link: "Education", path: "education"},
    {link: "Stay Connected", path: "contact"}
  ]
  return (
    <div className='px-10'>
      <div className='flex flex-col lg:flex-row justify-between my-10'>
        <div className='my-2'><img src='/assets/Odyssey.svg' alt='logo' className='h-5 mr-5 my-2'></img></div>
        <div className='md:flex my-2'>
          <ul className='flex flex-col md:flex-row items-start  lg:items-center'>
            {navItems.map(({link, path}) => {
              return <Link to={path} key={path} activeClass='active' spy={true} smooth={true} offset={-60} className='text-sm mr-5 my-2 lg:mx-5 font-semibold hover:text-gray-500 cursor-pointer'>{link}</Link>
            })}
          </ul>
        </div>
        <div className='flex my-2'>
          <ul className='flex flex-row items-center text-sm font-semibold hover:text-gray-500'>
            <li className='mr-5 my-2 lg:mx-5 '>Privacy policy</li>
            <li>Terms & Agreements</li>
          </ul>
        </div>
      </div>
      <div className='text-sm font-semibold text-gray-500 flex justify-center my-10'>[contact@odyssey.com].</div>
    </div>
  )
}
