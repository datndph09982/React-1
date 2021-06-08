import React from 'react'
import {Link} from 'react-router-dom';
const Slide = () => {
    return (
        <div className="image_coffee_slide_1 bg-left-top-right h-[600px] flex items-center px-24" >
                <div className>
                    <h1 className="text-[100px] font-black h-24">Online store</h1>
                    <h1 className="text-[80px] font-black text-[#c0aa83] mb-8">your market</h1>
                    <p className="w-[480px] text-gray-500 font-medium font-sans" >Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                    <div className="mt-12">
                        <Link className="px-9 py-3 mr-6 text-base font-bold leading-7  border text-white bg-[#c0aa83]  transition duration-300 hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none" >
                            View product
                        </Link>
                        <Link className="px-9 py-3 mr-6 text-base font-bold leading-7  border text-white bg-black  transition duration-300 hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none" >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Slide
