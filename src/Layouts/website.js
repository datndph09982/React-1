import React from 'react'
import Header from '../components/Header';
import bg_header from '../image/bg_header.jpg';
import {NavLink,Link} from 'react-router-dom';
import Footer from '../components/Footer';
const Website = ({title,className,children,signout}) => {
    // window.scrollTo(0,0);

    return (
        <div className={className}>
            <Header signout={signout}/>
            <div className="bg-header bg-left-top-right h-[300px] " >
                <h1 className="text-[72px] font-bold pt-24 pl-20 text-white">{title}</h1>
                <ul className="flex items-center">
                    <li className="inline-block text-lg font-bold pl-20 leading-7 text-[#c0aa83]"><NavLink to="/"  exact activeClassName="active">HOME PAGE</NavLink></li>
                    <li className="inline-block fas fa-angle-right ml-[12px] text-white"></li>
                </ul>
            </div>
            <main>
                {children}
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Website
