import React, { useEffect } from 'react'
import Website from '../../Layouts/website'
import {Link} from 'react-router-dom';
const ListProduct = ({Products,Categories}) => {
    console.log(Products);
    
    const productList = Products.map((product,index)=>{
        return <div key={index} className="bg-white border-gray-100 border h-[500px] w-[260px] px-6 pt-6 pb-10 mb-24 text-center hover:shadow-2xl">
                <img className="w-48 h-48 mb-4" src={`http://localhost:4000/api/product/image/${product._id}`} />
                <Link to={`/product/${product._id}`} className="text-2xl text-black font-black  hover:text-[#c0aa83]">{product.name}</Link>
                <p className="w-3/4 mx-auto mt-4 text-sm">Duis et aliquam orci. Vivamus augue quam, ...</p>
                <h1 className="text-2xl text-[#c0aa83] mx-auto font-extrabold mt-3 mb-5">${product.price}</h1>
                <Link to="/cart" className="block py-1 w-40 mx-auto align-middle text-white no-underline bg-[#c0aa83] hover:bg-black ">
                    <i className="fa fa-shopping-cart pr-0 md:pr-3" />
                    <span className="pb-1 text-sx font-bold  text-white  block md:inline-block">Add to cart</span>
                </Link>
            </div>
    })
    return (
        <Website title="All product">
            <div className="p-20 grid grid-cols-4" >
                <div className="mx-4 bg-[#f6f6f6] py-8 px-8">
                    <div className="mb-20">
                        <div className="text-3xl font-bold border-b-2 border-gray-300 py-2 my-10">Cart</div>
                        <div className="text-medium font-medium">No products in the cart</div>
                    </div>
                    <div className="my-10">
                        <div className="text-3xl font-bold border-b-2 border-gray-300 py-2 mb-6">Category</div>
                        <div>
                            <ul>
                                {Categories.map(((cate,index)=>{
                                    return <li className="   text-lg font-bold mb-4">
                                                <Link  className="hover:text-[#c0aa83] focus:text-[#c0aa83]" to={`/prodbycate/${cate._id}`} exact activeClassName="active">
                                                <li className="fas fa-angle-right mr-2 text-[#c0aa83]"></li>
                                                    {cate.name}
                                                </Link>
                                            </li>
                                }))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* main content shop page */}
                <div className="col-span-3 px-4">
                    <div className="mb-24">
                        <div className="float-left text-lg text-gray-700 font-medium py-4">Showing all products</div>
                        <div className="float-right w-48 px-5 py-4 border-gray-400 border">
                            
                        <select >
                            <option selected>Default sorting</option>
                        </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        {productList}
                        
                    </div>
                </div>
            </div>
        </Website>
    )
}

export default ListProduct
