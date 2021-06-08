import React from 'react'
import {
    NavLink
} from 'react-router-dom';
import Nav from './Nav';
const Header = () => {
    return (
        <header className="px-20 h-28 pt-7 border border-b">
            <div className="mx-auto flex items-center">
                <div className="pr-24">
                    <NavLink to="/" exact activeClassName="active" >
                        <img className="w-52 h-16 "src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/logo_black-9.png"/>
                    </NavLink>
                </div>
                <div className="mx-auto">
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header
