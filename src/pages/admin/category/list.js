import React from 'react';
import {Link} from 'react-router-dom';
import Admin from '../../../Layouts/admin';
const Listcate = ({Categories,onRemoveCate}) => {
    console.log(Categories);
    return (
        <Admin title="List category" description="Add product">
            
            <div className="text-gray-900 bg-gray-200">
                <div className="p-4 flex">
                    <Link className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" to="/admin/category/add">
                        Add new category
                    </Link>
                </div>

                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left p-3 px-5 ">STT</th>
                                <th className="text-left p-3 px-5 ">NAME</th>
                                <th className="text-left p-3 px-5 ">IMAGE</th>
                                <th className="text-left p-3 px-5 ">DESCRIPTION</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Categories.map((child, index) => (
                                <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                                    <td className="p-3 px-5" >{index}</td>
                                    <td className="p-3 px-5">{child.name}</td>
                                    <td className="p-3 px-5"><img className="h-28 w-28" src={`http://localhost:4000/api/category/image/${child._id}`} /></td>
                                    <td className="p-3 px-5">{child.description}                                </td>
                                    <td className="p-3 px-5 flex justify-center">
                                        <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                            <Link className="" to={`/admin/category/update/${child._id}`}>Detail</Link>
                                        </button>
                                        <button type="button" onClick={() => onRemoveCate(child._id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </Admin>
    )
}

export default Listcate
