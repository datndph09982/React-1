import React from 'react'
import {Link} from 'react-router-dom'
import Admin from '../../../Layouts/admin'
const Listcontact = ({Contact}) => {
    return (
        <Admin title="List contact" description="Add product">
            
        <div className="text-gray-900 bg-gray-200">
            

            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5 ">STT</th>
                            <th className="text-left p-3 px-5 ">NAME</th>
                            <th className="text-left p-3 px-5 ">EMAIL</th>
                            <th className="text-left p-3 px-5 ">TITLE</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Contact.map((child, index) => (
                            <tr key={index} className="border-b hover:bg-orange-100 bg-gray-100">
                                <td className="p-3 px-5" >{index}</td>
                                <td className="p-3 px-5">{child.name}</td>
                                <td className="p-3 px-5">{child.email}</td>
                                <td className="p-3 px-5">{child.title}                                </td>
                                <td className="p-3 px-5 flex justify-center">
                                    <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                        <Link className="" >Reply</Link>
                                    </button>
                                    </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </Admin>
    )
}

export default Listcontact
