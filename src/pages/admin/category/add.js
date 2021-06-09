import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Admin from '../../../Layouts/admin';
import swal from 'sweetalert';
const Addcate = ({ onAddCate }) => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("description", data.description);
        uploads.append("image", data.image[0]);
        onAddCate(uploads);
        swal("You add new success!", "...comeback to list!");
        history.push('/admin/category/list');
    }
    return (
        <Admin title="Add category">
            

            <form className="w-full max-w-3xl ml-12 mt-8" id="form-add" onSubmit={handleSubmit(onSubmit)} >

                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
                            Name
                        </label>
                        <input id="name_cate" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white 
                            ${errors.name ? 'border border-red-500' : ''}`}
                            placeholder="Name"
                            {...register('name', { required: true })}  type="text" placeholder="Name brand" />
                            {errors.name && errors.name.type === "required" &&
                                    <span className="text-red-500">* Name required</span>}
                    </div>

                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <label className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 
                                ${errors.Image ? 'border border-red-500' : ''}`}
                                placeholder="Image"
                                {...register('image', { required: true })} htmlFor="grid-state">
                            image
                        </label>
                        
                        <div className="relative">
                            <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                                ${errors.Image ? 'border border-red-500' : ''}`}
                                placeholder="Image"
                                {...register('image', { required: true })} id="image_category" type="file" />
                            {errors.image && errors.image.type === "required" &&
                            <span className="text-red-500">* Image required</span>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Description
                        </label>
                        <textarea id="description_product" cols={30} rows={5} type="text" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.description ? 'border border-red-500' : ''}`}
                            placeholder="description"
                            {...register('description', { required: true })} />
                        {errors.description && errors.description.type === "required" &&
                            <span className="text-red-500">* Description required</span>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/5 " />
                    <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="submit">
                        Add new
                    </button>
                </div>
            </form>

        </Admin>
    )
}

export default Addcate
