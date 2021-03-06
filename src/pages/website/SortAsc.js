import React,{useEffect,useState} from 'react'
import ProductApi from '../../api/ProductApi';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../action/cartAction';
const SortAsc = ({handleSetTitle,Categories}) => {
    useEffect(()=>{
        handleSetTitle('Shop')

    })
    const dispatch = useDispatch();
    const handleClick=(product)=>{
        dispatch(addToCart({...product}));
    }
    const [menuDrop, setMenuDrop] = useState(false);
    const onClick =()=>{
        setMenuDrop(!menuDrop);
    }
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const listProduct = async () => {
          try {
            const { data: product } = await ProductApi.getSort();
            setProducts(product);
          } catch (error) {
            console.log(error);
          }
        }
        listProduct();
      }, [])
      console.log(products);
      const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const pageNumbers = [];
    const totalPosts = products.length;
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const pagination = ()=>{
        return <div className="text-center">
                    <nav class="relative z-0 inline-fle rounded-md shadow-sm -space-x-px " aria-label="Pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className='inline-block'>
                            <button onClick={() => paginate(number)} aria-current="page" class="focus:bg-gray-400 z-10 bg-indigo-50 border-gray-700 text-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {number}
                            </button>
                        </li>
                        ))}
                    </nav>
                </div>
    }
    const productList = currentPosts.map((product,index)=>{
        return <div key={index} className="bg-white border-gray-100 border h-[500px] w-[260px] px-6 pt-6 pb-10 mb-24 text-center hover:shadow-2xl">
                <img className="w-48 h-48 mb-4" src={`http://localhost:4000/api/product/image/${product._id}`} />
                <Link to={`/product/${product._id}`} className="text-2xl text-black font-black  hover:text-[#c0aa83]">{product.name}</Link>
                <p className="w-3/4 mx-auto mt-4 text-sm">Duis et aliquam orci. Vivamus augue quam, ...</p>
                <h1 className="text-2xl text-[#c0aa83] mx-auto font-extrabold mt-3 mb-5">${product.price}</h1>
                <button onClick={()=>{handleClick(product)}} className="block py-1 w-40 mx-auto align-middle text-white no-underline bg-[#c0aa83] hover:bg-black ">
                    <i className="fa fa-shopping-cart pr-0 md:pr-3" />
                    <span className="pb-1 text-sx font-bold  text-white  block md:inline-block">Add to cart</span>
                </button>
            </div>
    })
    return (
        <div >
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
                    <div className="float-left text-lg text-gray-700 font-medium py-4">Price product's low to high</div>
                    <div className="float-right w-48 px-5 py-4 border-gray-400 border">
                        
                    <div className="relative inline-block text-left">
                    <li className="inline-block  px-4 text-lg font-black">
                        <a type="button"  onClick={onClick} className=" hover:text-[#c0aa83] focus:text-[#c0aa83] cursor-pointer  text-black  " id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Sort price
                            <i class="fas fa-angle-down ml-2"></i>
                        </a>
                    </li>
                    {menuDrop ? (
                    <div className="  origin-top-right-left absolute  mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                        <div className="py-1" role="none">
                        <>
                            <Link to="/sortasc" className="border-b text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]" 
                            role="menuitem" tabIndex={-1} id="menu-item-2">Price asc</Link>
                            <Link to="/sortdesc" className="text-gray-700 block px-4 py-2 text-base hover:text-[#c0aa83] focus:text-[#c0aa83]" 
                            role="menuitem" tabIndex={-1} id="menu-item-2">Price desc</Link>
                            
                            </>
                        </div>
                    </div>
                    ): ''}
                </div>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    {productList}
                </div>
                {pagination()}
            </div>
        </div>
    </div>
    )
}

export default SortAsc
