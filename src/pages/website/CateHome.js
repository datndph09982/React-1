import React, { useEffect, useState } from 'react'
import HomePage from '../../Layouts/HomePage'
import { Link,useParams } from 'react-router-dom';
import Slide from '../../components/Slide';
import Section1 from '../../components/Section1';
import Section2 from '../../components/Section2';
import Slider from "react-slick";
import CategoryApi from '../../api/CategoryApi'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../action/cartAction';
const CateHome = ({Products,Categories}) => {
    const dispatch = useDispatch();
    const handleClick=(product)=>{
        dispatch(addToCart({...product}));
    }
    const  settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const { id } = useParams();
    const [category, setCategory] = useState({});
    console.log(category);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data: cate } = await CategoryApi.get(id);
                setCategory(cate);
            } catch (error) {
                console.log(error)
            }
        }
        getCategory();
    }, [id]);
    const productById = Products.filter(product=>product.categoryId._id == category._id )
    const listproduct = productById.map((product, index) => {
        return <div key={index} className="pt-6 pb-10  text-center ">
            <div className="bg-white border-gray-100 border h-[500px] w-[240px]   hover:shadow-2xl">
            <img className="w-48 h-48 mb-4 mx-auto" src={`http://localhost:4000/api/product/image/${product._id}`} />
            <Link to={`/product/${product._id}`} className="text-2xl text-black font-black  hover:text-[#c0aa83]">{product.name}</Link>
            <p className="w-3/4 mx-auto mt-4 text-sm">Duis et aliquam orci. Vivamus augue quam, ...</p>
            <h1 className="text-2xl text-[#c0aa83] mx-auto font-extrabold mt-3 mb-5">${product.price}</h1>
            <button  onClick={()=>{handleClick(product)}} className="block py-1 w-40 mx-auto align-middle text-white no-underline bg-[#c0aa83] hover:bg-black ">
                <i className="fa fa-shopping-cart pr-0 md:pr-3" />
                <span className="pb-1 text-sx font-bold  text-white  block md:inline-block">Add to cart</span>
            </button>
            </div>
        </div>
    })
    const listcate = Categories.map((cate,index)=>{
        return <li className="inline-block px-6 text-xl font-black" key={index}>
            <Link to={`/homecate/${cate._id}`} className="focus:ring-4 focus:text-[#c0aa83] px-1 rounded focus:ring-[#c0aa83]">{cate.name}</Link>
        </li>
    })
    return (
        <div className="">
        <Slide />
        <Section1 />
        <div className="bg-[#f6f6f6] px-20 border-b pb-16 relative">
            <div>
                <div className="text-center  ">
                    <div className="absolute pl-96 pt-24">
                        <h1 className=" text-2xl text-[#c0aa83] font-black">Choose your coffee</h1>
                        <h1 className=" text-black text-5xl font-black pb-0">Recent Products</h1>
                    </div>
                    <h1 className=" mx-auto text-[160px] text-gray-200 font-black">Products</h1>
                </div>
                <div >
                <div>
                    <ul className="mx-auto text-center mt-14 mb-3">
                        {listcate}
                    </ul>
                </div>
                <div className="absolute w-[1116px] h-14  mt-[250px] ml-8 hover:bg-gray-700" >
                    <div className=" w-14 float-left h-14 bg-[#858585]  hover:bg-gray-700" ></div>
                    <div className=" w-14 float-right h-14 bg-[#858585] ml-8 hover:bg-gray-700" ></div>
                </div>
                <div className="px-20 relative">
                    <Slider {...settings} >
                        {listproduct}
                    </Slider>
                </div>
                <div className="text-center ">
                    <Link to="/product" className="px-9 py-3 mr-6 text-base font-black leading-7  border-2 text-[#c0aa83] border-[#c0aa83]  transition duration-300 hover:bg-black hover:text-white hover:border-black focus:outline-none" >
                        View product
                    </Link>
                </div>
            </div>
            </div>
        </div>
        <Section2 />
    </div>
    )
}

export default CateHome
