import React ,{useState} from 'react';
import Admin from '../../../Layouts/admin';
import Product from '../../website/Shop';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination';
const Listproduct = ({ Products, onRemove }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Products.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const pageNumbers = [];
    const totalPosts = Products.length;
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const pagination = ()=>{
        return <div className="text-center">
                    <nav class="relative z-0 inline-fle rounded-md shadow-sm -space-x-px " aria-label="Pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className='inline-block'>
                            <button onClick={() => paginate(number)} aria-current="page" class="z-10 focus:bg-gray-400  bg-indigo-50 border-gray-700 text-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                            {number}
                            </button>
                        </li>
                        ))}
                    </nav>
                </div>
    }
    console.log(currentPosts);
    return (
        <Admin title="List product">
            <div className="text-gray-900 bg-gray-200">
                <div className="p-4 flex">
                    <Link className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" to="/admin/product/add">
                        Add new product
                    </Link>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-3 px-5 w-12">STT</th>
                                <th className="text-left p-3 px-5 w-1/5">NAME</th>
                                <th className="text-left p-3 px-5 w-1/5">IMAGE</th>
                                {/* <th className="text-left p-3 px-5 w-1/6">BRAND</th> */}
                                <th className="text-left p-3 px-5 w-1/5">PRICE</th>
                                <th className="text-left p-3 px-5 w-1/5">QUANTITY</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.map((child,index) => (
                                <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                                    <td className="p-3 px-5" >{index}</td>
                                    <td className="p-3 px-5">{child.name}</td>
                                    <td className="p-3 px-5"><img className="h-28 w-28" src={`http://localhost:4000/api/product/image/${child._id}`} /></td>
                                    {/* <td className="p-3 px-5">{child.categoryId.name}</td> */}
                                    <td className="p-3 px-5">{child.price}</td>
                                    <td className="p-3 px-5">{child.quantity}                                </td>
                                    <td className="p-3 px-5 flex justify-end">
                                        <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                            <Link className="" to={`/admin/product/update/${child._id}`}>Detail</Link>
                                        </button>
                                        <button type="button" onClick={() => onRemove(child._id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {pagination()}
                {/* <Pagination /> */}
            </div>

        </Admin>
    )
}
export default Listproduct;