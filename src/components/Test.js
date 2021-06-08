import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import {HomeProduct} from '../css/style2'


const Test = ({ Products }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const listproduct = Products.map((product, index) => {
        return <div key={index} className="px-2 pt-6 pb-10 mb-24 text-center ">
            <div className="bg-white border-gray-100 border h-[500px] w-[260px]   hover:shadow-2xl">
            <img className="w-48 h-48 mb-4 mx-auto" src={`http://localhost:4000/api/product/image/${product._id}`} />
            <Link to={`/product/${product._id}`} className="text-2xl text-black font-black  hover:text-[#c0aa83]">{product.name}</Link>
            <p className="w-3/4 mx-auto mt-4 text-sm">Duis et aliquam orci. Vivamus augue quam, ...</p>
            <h1 className="text-2xl text-[#c0aa83] mx-auto font-extrabold mt-3 mb-5">${product.price}</h1>
            <Link to="/cart" className="block py-1 w-40 mx-auto align-middle text-white no-underline bg-[#c0aa83] hover:bg-black ">
                <i className="fa fa-shopping-cart pr-0 md:pr-3" />
                <span className="pb-1 text-sx font-bold  text-white  block md:inline-block">Add to cart</span>
            </Link>
            </div>
        </div>
    })
    return (
        <div className="bg-[#f6f6f6] px-20 border-b pb-16 relative">
            <Slider {...settings} >
                {listproduct}
            </Slider>
        </div>
    )
}

export default Test
