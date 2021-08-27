import React, { useEffect } from 'react'
import Website from '../../Layouts/website'
import { Link } from 'react-router-dom';
import Section2 from '../../components/Section2';
const About = ({handleSetTitle}) => {

    useEffect(()=>{
        handleSetTitle('About Us')

    })
    return (
        <div >
            <div className="bg-white h-[580px] grid grid-cols-2 gap-6 px-24 border-b">
                <div className="flex items-center">
                    <div>
                        <h1 className="text-6xl mb-4 text-black font-black  hover:text-[#c0aa83]">Become our dealer</h1>
                        <p className="text-lg font-medium text-gray-600">Curabitur sollicitudin ultrices tortor, eget pulvinar risus cursus eu. Vivamus sit amet odio massa. Vivamus dapibus elementum tellus nec fermentum. Sed blandit condimentum molestie. In hac habitasse platea dictumst. Etiam fringilla a elit at ornare.</p>
                        <div className="mt-12">
                            <Link className="px-9 py-3 mr-6 text-base font-bold leading-7  border text-white bg-[#c0aa83]  transition duration-300 hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none" >
                                Become a dealer
                        </Link>
                            <Link className="px-9 py-3 mr-6 text-base font-bold leading-7  border text-white bg-black  transition duration-300 hover:bg-white hover:text-black hover:border-black hover:border-2 focus:outline-none" >
                                Contact us
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-bottom flex items-center ">
                    <div className="image_about_1" ></div>

                </div>
            </div>
            <div className="pt-9 flex space-x-4 border-b">
                <ul className="flex space-x-4 mx-auto">
                    <li className="mb-12 inline-block w-[300px]">
                        <span>
                            <img src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-1.png" />
                        </span>
                        <h1 className="text-2xl my-4 text-black font-black">The best World sorts</h1>
                        <p className="text-black">Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                    </li>
                    <li className="mb-12 inline-block w-[300px]">
                        <span >
                            <img src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-3.png" />
                        </span>
                        <h1 className="text-2xl my-4 text-black font-black">Professional baristas</h1>
                        <p className="text-black">Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                    </li>
                    <li className="mb-12 inline-block w-[300px]">
                        <span>
                            <img src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-2.png" />
                        </span>
                        <h1 className="text-2xl my-4 text-black font-black">Many points of sale</h1>
                        <p className="text-black">Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                    </li>
                    <li className="mb-12 inline-block w-[300px]">
                        <span >
                            <img src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/about-icon-4.png" />
                        </span>
                        <h1 className="text-2xl my-4 text-black font-black">24/7 fast delivery</h1>
                        <p className="text-black">Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.</p>
                    </li>
                </ul>
            </div>
            <Section2 />
        </div>
    )
}

export default About
