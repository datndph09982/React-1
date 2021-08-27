import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomePage = ({children,signOut}) => {
    // window.scrollTo(0,0);
    return (
        <div>
            <Header signOut={signOut}/>
            <h1>{children}</h1>
            <Footer/>
        </div>
    )
}

export default HomePage
