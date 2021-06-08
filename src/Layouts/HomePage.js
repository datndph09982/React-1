import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomePage = (props) => {
    window.scrollTo(0,0);

    return (
        <div>
            <Header />
            <h1>{props.children}</h1>
            <Footer/>
        </div>
    )
}

export default HomePage
