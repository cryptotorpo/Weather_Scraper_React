import * as React from 'react'
import { FaUser, FaSearch } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

function Navbar () {
    return (
      <div className="bg-[#2D3B41] text-white flex flex-col h-[80px] w-full rounded-xl my-5 p-3">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 navbar-expand-lg bg-lightBlue-500">
            <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
                <div className="relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start">
                <a className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-no-wrap" href="#pablo">
                    Assigned Claims
                </a>
                <button className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none" type="button">
                    <span className="relative block w-6 h-px bg-white rounded-sm"></span>
                    <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
                    <span className="relative block w-6 h-px mt-1 bg-white rounded-sm"></span>
                </button>
                </div>
                <div className="items-center flex-grow lg:flex">
                <ul className="flex flex-col mr-auto list-none lg:flex-row">
                    <li className="nav-item">
                    <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="#pablo">
                        <i className="text-lg text-white opacity-75 fab fa-facebook-square leading-lg"></i>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="#pablo">
                        <FaUser className='w-4 h-4'/>         
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-white uppercase hover:opacity-75" href="#pablo">
                        <FiSettings className='w-4 h-4'/>
                    </a>
                    </li>
                </ul>
                <div className="relative flex flex-wrap items-stretch w-full px-4 sm:w-7/12 md:w-5/12 lg:ml-auto">
                    <div className="flex">
                    <span className="flex items-center py-1 pl-2 text-sm font-normal leading-snug text-center border border-r-0 border-solid rounded-full rounded-r-none white-space-no-wrap border-lightBlue-600 bg-lightBlue-100 text-lightBlue-800 placeholder-lightBlue-300">
                        <FaSearch className='w-4 h-4'/>
                    </span>
                    </div>
                    <input type="text" className="flex-1 w-full h-8 px-2 py-4 text-sm font-normal leading-snug bg-transparent border border-l-0 border-solid rounded-full rounded-l-none shadow-none outline-none border-lightBlue-600 text-lightBlue-700 bg-lightBlue-100 focus:outline-none placeholder-lightBlue-300" placeholder="Search" />
                </div>
                </div>
            </div>
        </nav>
      </div>
    );
}

export default Navbar;
