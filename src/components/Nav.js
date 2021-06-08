import React, { useState, useEffect } from 'react'
import { NavLink, useHistory, useLocation,Link } from 'react-router-dom';
import { signOut, isAuthenticate } from '../auth';
const Nav = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    const [menuDrop, setMenuDrop] = useState(false);
    const { user } = isAuthenticate();
    useEffect(() => {
        isAuthenticate() && setIsLogged(true);
    }, [pathname, isLogged])
    const onClick =()=>{
        setMenuDrop(!menuDrop);
        console.log(menuDrop);
        
    }
    return (
        <>
            <ul>
                <li className="inline-block  px-4 text-lg font-black ">
                    <NavLink className="hover:text-[#c0aa83] focus:text-[#c0aa83]" to="/" exact activeClassName="active">Home
                        <li className="fas fa-angle-right ml-2 "></li>
                    </NavLink>
                </li>
                <li className="inline-block px-4 text-lg font-black">
                    <NavLink className=" hover:text-[#c0aa83] focus:text-[#c0aa83]" to="/about" activeClassName="active">About us
                        <li className="fas fa-angle-right ml-2"></li>
                    </NavLink>
                </li>
                <li className="inline-block  px-4 text-lg font-black">
                    <NavLink className="hover:text-[#c0aa83] focus:text-[#c0aa83]" to="/product" activeClassName="active">Shop
                        <li className="fas fa-angle-right ml-2"></li>
                    </NavLink>
                </li>
                <li className="inline-block  px-4 text-lg font-black">
                    <NavLink className="hover:text-[#c0aa83] focus:text-[#c0aa83]" to="/contact" activeClassName="active">Contact
                        <li className="fas fa-angle-right ml-2"></li>
                    </NavLink>
                </li>
                {/* dropdown */}
                <div className="relative inline-block text-left">
                    <li className="inline-block  px-4 text-lg font-black">
                        <a type="button"  onClick={onClick} className=" hover:text-[#c0aa83] focus:text-[#c0aa83] cursor-pointer  text-black  " id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Account
                            <li className="fas fa-angle-right ml-2"></li>
                        </a>
                    </li>
                    {menuDrop ? (
                    <div className="  origin-top-right-left absolute  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                        <div className="py-1" role="none">
                        {pathname !== "/signin" && isLogged ? (
                            <>
                            <Link to={user.role == 1 ? "/admin/dashboard" : "/inforuser"} 
                                className="text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83] border-b" 
                                role="menuitem" tabIndex={-1} id="menu-item-0">
                                    {user.role == 1 ? "Admin" : "Information"}
                            </Link>
                            <Link  className="text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]"
                                onClick={() => signOut(() => {
                                    setIsLogged(false)
                                    history.push("/");
                                })}
                                role="menuitem" tabIndex={-1} id="menu-item-1">Sign Out
                            </Link>
                            </>
                        ): 
                            <>
                            <Link to="/signin" className="border-b text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]" 
                            role="menuitem" tabIndex={-1} id="menu-item-2">Sign In</Link>
                            <Link to="/signup" className="text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]" 
                            role="menuitem" tabIndex={-1} id="menu-item-2">Sign Up</Link>
                            
                            </>}
                        </div>
                    </div>
                    ): ''}
                </div>
                {/*end dropdown */}
                <li className="inline-block ml-10">
                    <NavLink to="/" className="inline-block" exact activeClassName="active">
                        <span className="w-5 h-5 rounded-full bg-red-500 px-2 text-white mr-\[4px\]">2</span>
                        <i className="fa fa-shopping-cart"></i>
                    </NavLink>
                </li>
                <li className="inline-block ml-6">
                    <NavLink to="/" className="inline-block fas fa-search" exact activeClassName="active">

                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Nav
