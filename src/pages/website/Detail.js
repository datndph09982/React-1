import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CategoryApi from '../../api/CategoryApi';
import ProductApi from '../../api/ProductApi';
import Website from '../../Layouts/website';

const DetailProduct = () => {
    const { id } = useParams();
    const [product, setProducts] = useState({})
    console.log(product);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data: products } = await ProductApi.get(id);
                // const { data: cate} = await CategoryApi.get(products.categoryId._id);
                // const catename = cate.name;
                // const productByid = {...products,catename};
                setProducts(products);
            } catch (error) {

            }
        }
        getProduct();
    }, [id])
    return (
        <Website title="Detail product">
            <div className="grid grid-cols-2 my-20">
                <div className="col-1 w-2/3  relative py-24">
                    <img src={`http://localhost:4000/api/product/image/${product._id}`} alt className=" inset-0  ml-40" />
                </div>
                <form className="col-1 pl-6  border-l-2 border-gray-200 ">
                    <h1 className="text-4xl py-2 font-black text-black">{product.name}</h1>
                    <div className="grid grid-cols-5 gap-4">
                        <div className>
                            {/* <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Brand</h1> */}
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Price</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Quantity</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Shipping</h1>
                        </div>
                        <div className="col-span-4">
                            {/* <h1 className="w-full flex-none text-xl font-normal text-black mt-6">{product.categoryId.name}</h1> */}
                            <h1 className="w-full flex-none text-xl font-normal text-red-500 mt-6">{product.price}</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-black mt-6">{product.quantity}</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-black mt-6">
                                <div className="flex">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png" width={40} height={15} className="flex-item" />Freeship </div>
                                <div className="text-gray-500">Free Shipping when the order reaches minimum value</div>
                            </h1>
                            <h1 className="w-full text-xl font-normal text-black mt-2 flex">
                                <div className="flex-item text-gray-600">Ship address</div>
                                <select className="flex-item ml-4 border rounded-lg">
                                    <option>Choosen...</option>
                                    <option>Address 1</option>
                                </select>
                            </h1>
                            
                        </div>
                    </div>
                    <div className="flex space-x-2 my-4 text-sm font-medium">
                        <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Add to bag</button>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                            <svg width={20} height={20} fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Free shipping on all continental US orders.</p>
                </form>
            </div>
            <div className="bg-gray-100 w-4/5 mx-auto  mt-10 py-2 pl-6 text-xl font-semibold text-gray-500 ">
                SIMILAR PRODUCTS
            </div>
            {/* <div className=" w-4/5 h-80 mx-auto mt-2 ">
                <div className="grid grid-cols-4 gap-4 justify-items-center">
                    {Products.map((product,index) => {
                       return <div key={index} className="w-full h-full flex flex-col shadow-xl p-2 ">
                        <div className=" bg-center w-full h-4/5 static"><img src={`http://localhost:4000/api/product/image/${product._id}`} /></div>
                        <div className="p-2 font-mono  text-center ">
                            <ul>
                                <li><p className="text-xl font-semibold text-gray-500">$ {product.price}</p></li>
                                <li><a href="/#/product/${product._id}" className="text-lg font-bold ">{product.name}</a></li>
                                <li className="px-5">
                                    <button className="rounded-full  flex items-center focus:outline-none px-8 bg-gray-500 text-white mt-2 py-2 hover:bg-gray-300 hover:text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                        <p className="ml-2">Add to cart</p>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
      
                    })}
                </div>
            </div> */}
            <div className="bg-gray-100 w-4/5 mx-auto px-6 py-4 ">
                <form className="text-gray-500">
                    <label>Comment</label><br />
                    <textarea type="text" className=" p-2 border w-full mt-2" h-40 placeholder="Comment about product's quality...." defaultValue={""} />
                    <button className="px-10 py-2 bg-gray-500 hover:bg-black rounded-md text-white mt-2 font-semibold">Send</button>
                </form>
            </div>
            <div className="bg-gray-100 w-4/5 h-80 mx-auto p-6 mt-10">
                <div className="bg-white py-3 pl-3 text-xl font-semibold text-gray-500">
                    DETAIL PRODUCT
    </div>
                <div className="grid grid-cols-6 py-3 pl-3">
                    <div className="cols-1">
                        <div className="my-2 text-gray-400">Category</div>
                        <div className="my-2 text-gray-400">Brand</div>
                        <div className="my-2 text-gray-400">Material</div>
                        <div className="my-2 text-gray-400">Origin</div>
                        <div className="my-2 text-gray-400">Category</div>
                        <div className="my-2 text-gray-400">Category</div>
                    </div>
                    <div className="cols-5">
                        <div className="my-2 ">Model car</div>
                        <div className="my-2 ">Bruder</div>
                        <div className="my-2 ">Plastic</div>
                        <div className="my-2 ">China</div>
                        <div className="my-2 ">15</div>
                        <div className="my-2 ">Hanoi city</div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 w-4/5 h-80 mx-auto p-6 mt-10">
                <div className="bg-white py-3 pl-3 text-xl font-semibold text-gray-500">
                    PRODUCT DESCRIPTION
                    </div>
                <div className=" py-3 px-3">
                    <div className="my-2 text-gray-600">
                        1:16 Scale Model Vehicle The Bruder BRU03570 Crane Truck features a lifelike design with exquisite simulation details. The product is equipped with a system of lights and signaling bells to stimulate the curiosity of the baby. The product will definitely be a meaningful gift that parents give to babies, especially babies who love toy car models.
        <br />- The vehicle has a crane arm that can reach up to 1.2m.
        <br />- The car is also equipped with a system of lights and signaling bells to contribute to the excitement of the baby when playing.
        <br />- Exactly and accurately simulated car model with real car image in 1:16 scale.
        <br />- Thanks to that, your baby can easily learn and distinguish different types of transport.
        <br /> - The details of the product are made from safe plastic according to European standards.
      </div>
                </div>
            </div>
        </Website>

    )
}

export default DetailProduct
