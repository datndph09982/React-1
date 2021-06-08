import React from 'react'
import {Link} from 'react-router-dom';
const Section2 = () => {
    return (
        <>
            <div className="bg-white h-[580px] grid grid-cols-2 gap-6 px-24">
                <div className="image_coffee_home2 bg-right flex items-center">
                    <div >
                        <h1 className="text-3xl text-black font-black  hover:text-[#c0aa83]">More than</h1>
                        <h1 className="text-[120px] h-32 leading-[124px] font-black  text-[#c0aa83]">5400</h1>
                        <h1 className="text-5xl w-[300px] text-black font-black  hover:text-[#c0aa83]">Customers trust us</h1>
                    </div>
                </div>
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
            </div>
            <div className="h-48 bg-white border-t px-28 py-12 grid grid-cols-6">
                <div className="text-center">
                    <img className="w-36 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/restaurants.png"/>
                </div>
                <div className="text-center">
                    <img className="w-36 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/vintage.png"/>
                </div>
                <div className="text-center">
                    <img className="w-36 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/cupcake.png"/>
                </div>
                <div className="text-center">
                    <img className="w-36 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/coffe_logo2.png"/>
                </div>
                <div className="text-center">
                    <img className="w-36 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/bakery.png"/>
                </div>
                <div className="text-center">
                    <img className="w-36 " src="http://coffeeking.like-themes.com/wp-content/uploads/2017/09/brandit.png"/>
                </div>
            </div>
        </>
    )
}
export default Section2;