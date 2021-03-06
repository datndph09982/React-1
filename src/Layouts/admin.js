import React from 'react'
import {Link, NavLink} from 'react-router-dom';
const Admin = ({ title = "title", className, children }) => {
    // window.scrollTo(0,0);

    return (

        < >
            <nav className={className} className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
                <div className="flex flex-wrap items-center">
                    <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
                        <NavLink to="/" className="block py-4 md:py-3 pl-4 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                             <i className="fas fa-home pr-0 md:pr-3" /><span className="text-white pb-1 md:pb-0 text-xs font-bold md:text-base  md:text-gray-400 block md:inline-block">WEBSITE</span>
                        </NavLink>
                    </div>
                    <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                        <span className="relative w-full">
                            <input type="search" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" />
                            <div className="absolute search-icon" style={{ top: '1rem', left: '.8rem' }}>
                                <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                                </svg>
                            </div>
                        </span>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                            </li>
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block">
                                    <button onclick="toggleDD('myDropdown')" className="drop-button text-white focus:outline-none"> <span className="pr-2"><i className="em em-robot_face" /></span> Hi, User <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                                    <div id="myDropdown" className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                                        <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onkeyup="filterDD('myDropdown','myInput')" />
                                        <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw" /> Profile</a>
                                        <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw" /> Settings</a>
                                        <div className="border border-gray-800" />
                                        <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw" /> Log Out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* end nav dashboard */}
            <div className="flex flex-col bg-gray-800 md:flex-row">
                <div class="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
                    <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                        <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                            <li className="mr-3 flex-1">
                                <NavLink to="/admin/dashboard" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                                    <i className="fas fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="mr-3 flex-1">
                                <NavLink to="/admin/product/list" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                    <i className="fa fa-archive pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Products</span>
                                </NavLink>
                            </li>
                            <li className="mr-3 flex-1">
                                <NavLink to="/admin/category/list" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                                    <i className="fa fa-calendar-check pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Category</span>
                                </NavLink>
                            </li>
                            <li className="mr-3 flex-1">
                                <NavLink to="/admin/contact/list" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                                    <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-content flex-1 bg-gray-100 mt-14  pb-24 ">
                    <div className="bg-gray-800 pt-3">
                        <div className="flex flex-row rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                                <h3 className="font-bold pl-4">{title}</h3>
                        </div>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Admin
