import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {deleteCart,upToCart,downToCart} from '../../action/cartAction'
import Website from '../../Layouts/website'
import { useForm } from 'react-hook-form';
const Cart = ({User,handleSetTitle}) => {
    useEffect(()=>{
        handleSetTitle('Cart')
    })
    const arrProductCart = useSelector(data=>data.cart.data);
    if(arrProductCart != null){
        var totalPrice= arrProductCart.reduce((sum,{sl,price})=>sum + sl*price,0);
    }
    const dispatch = useDispatch();
    const handleDelete = (id)=>{
            dispatch(deleteCart(id));
    }
    const handleUpToCart = (id)=>{
        dispatch(upToCart(id));
    }
    const handleDownToCart = (id)=>{
        dispatch(downToCart(id));
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div title="Cart">
            <div className="w-11/12 mt-10 p-4 bg-gray-200 mx-auto">
                <div className="container" id="container_cart">
                    <h2 className="text-center text-3xl font-bold py-8">CART SHOPPING</h2>
                        <div className="flex justify-end">
                            <a href><button className="mx-8 my-2 py-2 rounded-md w-20 bg-gray-500 text-white font-bold hover:bg-black" type="button">History</button></a>
                        </div>
                        <div className="table_cart px-4">
                            <table className=" w-full text-center table-hover my-8 load_price1">
                                <thead><tr className="border-b-2 border-gray-500">
                                    <th className="w-1/4 ">NAME PRODUCT</th>
                                    <th>IMAGE</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th></th>
                                    <th />
                                </tr>
                                </thead>
                                <tbody>
                                {arrProductCart.map((product,index)=>{
                                    return <tr key={index} className=" border-b border-gray-500 ">
                                        <td className="w-1/4 font-bold text-xl ">{product.name} </td>
                                        <td className="flex justify-center">
                                            <a href>
                                                <img className="h-40 py-4" src={`http://localhost:4000/api/product/image/${product._id}`} />
                                            </a>
                                        </td>
                                        <td className=" font-bold text-medium">$ {product.price}</td>
                                        <td className="  text-center">
                                            <div className="flex flex-col ">
                                                    <button 
                                                        onClick={()=>handleUpToCart(product._id)} 
                                                            className=" focus:outline-none">
                                                                <i class="fas fa-caret-square-up"></i>
                                                    </button>
                                                <div className="font-bold text-medium">{product.sl}</div>
                                                    <button 
                                                        onClick={()=>handleDownToCart(product._id)}  
                                                        className=" focus:outline-none">
                                                            <i class="fas fa-caret-square-down "></i>
                                                    </button>
                                            </div>
                                        </td>
                                        {/* <td className="text-primary" /> */}
                                        <td><button onClick={()=>handleDelete(product._id)}><i className="far fa-trash-alt text-black hover:text-blue-500 pr-4" /></button></td>
                                    </tr>
                                })}
                                    
                                </tbody></table>
                        </div>
                        <a href><button className="mr-3 ml-5 my-2 py-2 rounded-md w-20 bg-gray-500 text-white font-bold hover:bg-black " type="button"> <i className="fas fa-arrow-left mr-2" />Back</button></a>
                        <button className="px-2 my-2 py-2 rounded-md w-50 bg-gray-500 text-white font-bold hover:bg-black" id="update_cart" type="button">Update cart</button>
                </div>
                <div className="container ">
                    <div className="text-2xl my-4 font-semibold mx-6">INFORMATION CUSTOMER</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className>
                            <form id="thong_tin_kh">
                                <input className="w-full md:w-10/12 p-2 my-4 border-2 border-gray-600" 
                                defaultValue={User.name} disabled
                                placeholder="Name" type="text" />
                                <input className="w-full md:w-10/12 p-2 my-4 border-2 border-gray-600" 
                                defaultValue={User.email} disabled
                                placeholder="Email" type="text" />
                                <input className="w-full md:w-10/12 p-2 my-4 border-2 border-gray-600" 
                                {...register("address",{required:true})}
                                placeholder="Address" type="text" />
                                <input className="w-full md:w-10/12 p-2 my-4 border-2 border-gray-600" 
                                {...register("phone", { required: true })}
                                placeholder="Phone number" type="text" />
                                <button type="button" id="thanh_toan_js" className="px-10 my-2 py-2 rounded-md w-50 bg-gray-500 text-white font-bold hover:bg-black">Order</button>
                            </form>
                        </div>
                        <div className="border-2 border-gray-400 p-4 mt-4">
                            <div className="text-2xl mb-4 font-semibold">Bill</div>
                            <div className="flex justify-between border-b-4 border-gray-400 py-2">
                                <div className="font-semibold">Product</div>
                                <div className="font-semibold mr-4">Price</div>
                            </div>
                            
                            <div className="don_hang">
                            {arrProductCart.map((pro,index)=>{
                                return <div className="flex justify-between py-2  border-b-2 border-gray-400 load_price">
                                            <div className="text-gray-600">{pro.name}</div>
                                            <div className=" text-primary flex mr-4 text-xl"> <p className="text-xl mr-1">${pro.price}</p>(x{pro.sl})</div>
                                        </div>
                            })}
                                
                            </div>
                            <div className="don_hang_total">
                                <div className="flex justify-between py-2  border-b-2 border-gray-400 load_price2">
                                    <div className="font-semibold">Total</div>
                                    <div className="text-primary mr-4 text-xl text-red-500 font-bold">$ {totalPrice}</div>
                                </div>
                            </div>
                            <div className="py-4">Making payment when goods are delivered, customers have the right to check the goods before making payment</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
