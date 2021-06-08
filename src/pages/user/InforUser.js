import React from 'react'
import {Link} from 'react-router-dom'
import Website from '../../Layouts/website'
import {isAuthenticate} from '../../auth/index';
const InforUser = () => {
    const {user} = isAuthenticate();
    return (
        <Website title="Information user">
            <div className="grid grid-cols-3">
                <div class="w-2/3 mx-auto">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="text-left w-full border-collapse"> {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
                            <thead>
                                <tr>
                                    <th className="bg-gray-300 py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-grey-lighter">
                                    <td><Link to='/cart' className="py-4 px-6 border-b border-grey-light">Cart</Link></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-span-2 w-2/3 mx-auto">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="text-left w-full border-collapse"> {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
                            <thead>
                                <tr>
                                    <th className="bg-gray-300 py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">Name: {user.name}</td>
                                </tr>
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">Email: {user.email}</td>
                                </tr>
                                <tr className="hover:bg-grey-lighter">
                                    <td className="py-4 px-6 border-b border-grey-light">Role:  {user.role == 1 ? 'Admin':'Register user'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </Website>
    )
}

export default InforUser
