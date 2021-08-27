import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../action/cartAction';
import CategoryApi from '../../api/CategoryApi';
import ProductApi from '../../api/ProductApi';
import Website from '../../Layouts/website';
const DetailProduct = ({Categories,handleSetTitle}) => {
    useEffect(()=>{
        handleSetTitle('Detail product')
    })
    const { id } = useParams();
    const [product, setProducts] = useState({});
    const [cate, setCate] = useState({});
    const [relatedPro, setRelatedPro]= useState([]);
    console.log(relatedPro);
    const  settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const dispatch = useDispatch();
    const handleClick=(product)=>{
        dispatch(addToCart({...product}));
    }
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductApi.get(id);
                const {categoryId, ...newProduct } =data;
                const {_id} =categoryId;
                const idCategory = {categoryId:_id};
                const product = {...idCategory, ...newProduct}
                setProducts(product);
            } catch (error) {

            }
        }
        getProduct();
    }, [id])
    useEffect(() => {
        const realtedProduct = async () => {
            try {
                const { data:relatPro } = await ProductApi.getRelated(id);
                setRelatedPro(relatPro);
            } catch (error) {

            }
        }
        realtedProduct();
    }, [id])
    useEffect(()=>{
        const cateId = async () =>{
            const {data:category} =await CategoryApi.get(product.categoryId);
            setCate(category);
        }
        cateId();
    },[]);
    const listRelated = ()=>{
        return <div class=" w-4/5  mx-auto mt-2 " >
        <div class="grid grid-cols-3 gap-6 justify-items-center">
        {relatedPro.map(product=>{
            return <div  className="bg-white border-gray-100 border h-[500px] w-[260px] px-6 pt-6 pb-10 mb-12 text-center hover:shadow-2xl">
                    <img className="w-48 h-48 mb-4" src={`http://localhost:4000/api/product/image/${product._id}`} />
                    <Link to={`/product/${product._id}`} className="text-2xl text-black font-black  hover:text-[#c0aa83]">{product.name}</Link>
                    <p className="w-3/4 mx-auto mt-4 text-sm">Duis et aliquam orci. Vivamus augue quam, ...</p>
                    <h1 className="text-2xl text-[#c0aa83] mx-auto font-extrabold mt-3 mb-5">${product.price}</h1>
                    <button onClick={()=>{handleClick(product)}} className="block py-1 w-40 mx-auto align-middle text-white no-underline bg-[#c0aa83] hover:bg-black ">
                        <i className="fa fa-shopping-cart pr-0 md:pr-3" />
                        <span className="pb-1 text-sx font-bold  text-white  block md:inline-block">Add to cart</span>
                    </button>
                </div>
                })}
                </div>
            </div>
    }

    return (
             <div title="Detail product">
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
                                <li className="text-lg font-bold mb-4">
                                    <Link className="hover:text-[#c0aa83] focus:text-[#c0aa83]" to="/product" exact activeClassName="active">
                                    <li className="fas fa-angle-right mr-2 text-[#c0aa83]"></li>
                                        All products
                                    </Link>
                                </li>
                                {Categories.map(((cate,index)=>{
                                    return <li key={index} className="   text-lg font-bold mb-4">
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
                        <div className="float-left text-lg text-gray-700 font-medium py-4">Showing detail product</div>
                        
                    </div>
                <div className="grid grid-cols-2 ">
                <div className="col-1   relative py-8 mb-6">
                    <img src={`http://localhost:4000/api/product/image/${product._id}`} alt className=" inset-0  mx-auto" />
                </div>
                <form className="col-1 pl-6 border-l-2 border-gray-200 ">
                    <h1 className="text-6xl py-2 font-black text-[#c0aa83]">{product.name}</h1>
                    <div className="grid grid-cols-5 gap-4">
                        <div className>
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Brand</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Price</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Quantity</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-gray-500 mt-6">Shipping</h1>
                        </div>
                        <div className="col-span-4">
                            <h1 className="w-full flex-none text-xl font-normal text-black mt-6">{cate.name}</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-red-500 mt-6">${product.price}</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-black mt-6">{product.quantity}</h1>
                            <h1 className="w-full flex-none text-xl font-normal text-black mt-6">
                                <div className="flex">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1cdd37339544d858f4d0ade5723cd477.png" width={40} height={15} className="flex-item" />Freeship </div>
                                <div className="text-gray-500">Free Shipping when the order </div>
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
                        <button 
                        onClick={()=>{handleClick(product)}}
                        className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Add to bag</button>
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                            <svg width={20} height={20} fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Free shipping on all continental US orders.</p>
                </form>
            </div>
            {/* related */}
            <div class="bg-gray-100  mx-auto  mt-10 py-2 pl-6 text-xl font-semibold text-gray-500 " >
                SIMILAR PRODUCTS
            </div>
            {listRelated()}
            {/* <div class=" w-4/5 h-80 mx-auto mt-2 " >
              <div class="grid grid-cols-4 gap-4 justify-items-center">
              {listRelated}
              </div>
          </div> */}

            <div className="bg-gray-100 w-6/7 mx-auto px-6 py-4 ">
                <form className="text-gray-500">
                    <label>Comment</label><br />
                    <textarea type="text" className=" p-2 border w-full mt-2" h-40 placeholder="Comment about product's quality...." defaultValue={""} />
                    <button className="px-10 py-2 bg-gray-500 hover:bg-black rounded-md text-white mt-2 font-semibold">Send</button>
                </form>
            </div>
            <div className="bg-gray-100 w-6/7 h-80 mx-auto p-6 mt-10">
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
            <div className="bg-gray-100 w-6/7  mx-auto p-6 mt-10">
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
        
                </div>
            </div>
        </div>
           

    )
}

export default DetailProduct
