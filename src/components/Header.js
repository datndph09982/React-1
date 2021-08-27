import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { isAuthenticate, signOut } from '../auth';
const Header = ({ User, signout }) => {

    const cart = useSelector(state => state.cart.data);
    const dispatch = useDispatch()
    const history = useHistory();
    const { pathname } = useLocation();
    const [isLogged, setIsLogged] = useState(false);
    const [menuDrop, setMenuDrop] = useState(false);
    const [search, setSearch] = useState(false);
    const { user } = isAuthenticate();
    useEffect(() => {
        isAuthenticate() && setIsLogged(true);
    }, [pathname, isLogged])
    const onClick = () => {
        setMenuDrop(!menuDrop);
    }
    const onClickForm = () => {
        setSearch(!search);
    }
    const Nav = () => {
        return <>
            <ul className={search ? `opacity-[0.1] inline-block transition ease-in-out duration-150` : 'inline-block'}>
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
                        <a type="button" onClick={onClick} className=" hover:text-[#c0aa83] focus:text-[#c0aa83] cursor-pointer  text-black  " id="menu-button" aria-expanded="true" aria-haspopup="true">
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
                                        <Link className="text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]"
                                            onClick={() => {
                                                // console.log('click')
                                                signout()
                                                setIsLogged(false)
                                                signOut(()=>{
                                                  history.push('/signin');
                                                })
                                            }
                                            }
                                            role="menuitem" tabIndex={-1} id="menu-item-1">Sign Out
                                        </Link>
                                    </>
                                ) :
                                    <>
                                        <Link to="/signin" className="border-b text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]"
                                            role="menuitem" tabIndex={-1} id="menu-item-2">Sign In</Link>
                                        <Link to="/signup" className="text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]"
                                            role="menuitem" tabIndex={-1} id="menu-item-2">Sign Up</Link>

                                    </>}
                            </div>
                        </div>
                    ) : ''}
                </div>
                {/*end dropdown */}
            </ul>
            <ul className="inline-block">
                <li className="inline-block ml-10">
                    <NavLink to="/cart" className="inline-block" exact activeClassName="active">
                        <span className="w-5 h-5 rounded-full bg-red-500 px-2 text-white mr-\[4px\]">{cart.length}</span>
                        <i className="fa fa-shopping-cart"></i>
                    </NavLink>
                </li>
                <li className="inline-block ml-6 relative">
                    <NavLink to="/" onClick={onClickForm} className="inline-block fas fa-search" exact activeClassName="active" aria-expanded="true" aria-haspopup="true">
                    </NavLink>
                    {search ? (
                        <input className="transition ease-in-out duration-700 w-60 h-10 opacity-100 bg-[#f6f6f6] border-2 border-gray-800 rounded absolute mt-[-10px] right-5 pl-3 placeholder-gray-800 placeholder-" placeholder="SEARCH" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1} />
                    ) : ''}
                </li>
            </ul>
        </>
    }
    return (
        <header className="px-20 h-28 pt-7 border border-b">
            <div className="mx-auto flex items-center">
                <div className="pr-24">
                    <NavLink to="/" exact activeClassName="active" >
                        <img className="w-52 h-16 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/logo_black-9.png" />
                    </NavLink>
                </div>
                <div className="mx-auto">
                    {/* <Nav signOut={signOut}/> */}
                    {Nav()}
                </div>
            </div>
        </header>
    )
}

export default Header
