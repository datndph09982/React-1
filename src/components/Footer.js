import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <>
        <footer className="h-[500px] image_footer bg-[#242424] pt-24 px-24 mt-32">
            <div className="grid grid-cols-3">
            <div className="px-8">
                <img className="w-52 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/logo_white-7.png" />
                <p className="my-12 text-gray-500 text-sx font-medium">Non augue eget convallis mauris pellentesque congue. Japan soccer care Zen. Or pull players from the largest mass care is always a platform.</p>
                <Link className="px-9 py-3 mr-6 text-base font-bold leading-7   text-white bg-[#c0aa83]  transition duration-300 hover:bg-white hover:text-black hover:border-black  focus:outline-none" >
                    Become a dealer
                    </Link>
            </div>
            <div className="px-8">
                <h1 className="text-3xl text-[#c0aa83] font-extrabold">EXPLORE</h1>
                <div className="my-12 flex flex-wrap">
                    <div className="w-1/2 mb-4">
                        <Link className="text-xl text-white font-black hover:text-[#c0aa83]"><li className="fas fa-angle-right mr-2"></li>Home</Link>
                    </div>
                    <div className="w-1/2">
                        <Link className="text-xl text-white font-black hover:text-[#c0aa83]"><li className="fas fa-angle-right mr-2"></li>About us</Link>
                    </div>
                    <div className="w-1/2 mb-4">
                        <Link className="text-xl text-white font-black hover:text-[#c0aa83]"><li className="fas fa-angle-right mr-2"></li>Contact</Link>
                    </div>
                    <div className="w-1/2">
                        <Link className="text-xl text-white font-black hover:text-[#c0aa83]"><li className="fas fa-angle-right mr-2"></li>Shop</Link>
                    </div>
                    <div className="w-1/2 mb-4">
                        <Link className="text-xl text-white font-black hover:text-[#c0aa83]"><li className="fas fa-angle-right mr-2"></li>Signin</Link>
                    </div>
                    <div className="w-1/2">
                        <Link className="text-xl text-white font-black hover:text-[#c0aa83]"><li className="fas fa-angle-right mr-2"></li>Signup</Link>
                    </div>
                </div>

            </div>
            <div className="px-8">
                <h1 className="text-3xl text-[#c0aa83] font-extrabold mb-12">CONTACT US</h1>
                <ul>
                    <li className="font-medium text-base text-gray-500 mb-2"><i className="fas fa-map-marker-alt text-[#c0aa83] mr-5"></i>44 Nguyen Chi Thanh, Ha Noi</li>
                    <li className="font-medium text-base text-gray-500 mb-2 "><i className="fas fa-phone text-[#c0aa83] mr-5"></i>+84 911.865.212</li>
                    <li className="font-medium text-base text-gray-200 mb-2"><i className="fas fa-envelope text-[#c0aa83] mr-5"></i>Datndph09982@fpt.edu.vn</li>
                    <li className="font-medium text-base text-gray-200 mb-2"><i className="fab fa-facebook-f text-[#c0aa83] mr-5"></i>www.facebook.com/dat.nguyen</li>
                </ul>
            </div>
            </div>
            
        </footer>
        <div className="bg-gray-800 text-center h-12 flex items-center mx-auto">
            <p className="mx-auto text-gray-400"> © All Rights Reserved - 2021</p>
        </div>
        </>
    )
}

export default Footer
