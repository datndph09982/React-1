import React, { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { appendErrors, useForm } from 'react-hook-form'
import Admin from '../../../Layouts/admin';
import CategoryApi from '../../../api/CategoryApi';
import Select from 'react-select';
import swal from 'sweetalert';
/*
    b1: cài đặt react-hook-form: npm i react-hook-form --save
    b2: import {useForm} from 'react-hook-form'
    b3: khai báo sử dụng: const {register, handleSubmit, formState:{error}}=userForm();
    b4: sử dụng: {...register('name'),{required}}    
*/
const AddTodoPage = ({ onAdd, Categories }) => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [category,setCategory]=useState([]);
    const [cate, setCate] = useState(category[0]);
    const onHadleCategory = ({ value }) => {
        setCate(value);
    }
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const { data: category } = await CategoryApi.getAll();
               
                const newCategory = category.map(cate=>{
                    return {
                        value:cate._id,
                        label:cate.name
                    }
                });
                setCategory(newCategory);
            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCategory();
    }, []);
    const onSubmit = (data) => {
        let uploads = new FormData();
        uploads.append("name", data.name);
        uploads.append("price", data.price);
        uploads.append("description", data.description);
        uploads.append("image", data.image[0]);
        uploads.append("quantity", data.quantity);
        uploads.append("categoryId", data.categoryId);
        uploads.append("status", data.status);
        
        onAdd(uploads);
        swal("You add new success!", "...comeback to list!");
        history.push('/admin/product/list');
    }

    return (
        <Admin title="Add product">
            <form className="w-full max-w-3xl ml-32 mt-8" id="form-add" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input id="name_product"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500${errors.name ? 'border border-red-500' : ''}`}
                            {...register('name', { required: true })} type="text" placeholder="Name product" />
                            {errors.name && errors.name.type === "required" &&
                            <span className="text-red-500">* Name required</span>}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 
                        " htmlFor="grid-last-name">
                            price
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.price ? 'border border-red-500' : ''}`}
                            placeholder="Price"
                            {...register('price', { required: true, min: 0 })}
                            id="price_product" type="number" placeholder="Price" />
                        {errors.price && errors.price.type === "required" &&
                            <span className="text-red-500">* Price required</span>}
                        {errors.price && errors.price.type === "min" &&
                            <span className="text-red-500">* Price must be positive</span>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
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
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Link image
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                                    ${errors.Image ? 'border border-red-500' : ''}`}
                            placeholder="Image"
                            {...register('image', { required: true })}
                            id="image_product" type="file" />
                        {errors.image && errors.image.type === "required" &&
                            <span className="text-red-500">* Image required</span>}
                        <p className="text-gray-600 text-xs italic">Add link product's image</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            quantity
                        </label>
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                                ${errors.Quantity ? 'border border-red-500' : ''}`}
                            placeholder="quantity"
                            {...register('quantity', { required: true })} id="quantity_product" type="number" />
                            {errors.quantity && errors.quantity.type === "required" &&
                            <span className="text-red-500">* Quantity required</span>}
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Brand 
                        </label>
                        <div className="relative">
                            {/* <Select className={`${errors.categoryId ? 'border border-red-500' : ''}`} 
                                defaultValue={cate}
                                classNamePrefix="select"
                                onChange={(cate) => onHadleCategory(cate)}
                                options={category}
                              />   */}
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                            "{...register('categoryId',{required:{value:true,message:"* Category is required"}})}
                            >
                                 <option value="">Choose brand...</option>
                                {Categories.map((cate, index) => (
                                    <option 
                                        value={cate._id} key={index}>{cate.name}</option>
                                ))}
                            </select>
                                <div className="text-red-500">{errors.categoryId && errors.categoryId.message}</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 hidden">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Status
                        </label>
                        <div className="relative ">
                            <input type="text" className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${errors.Status ? 'border border-red-500' : ''}`}
                                placeholder="status"
                                {...register('status')}
                                defaultValue={true} />
                        </div>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3" />
                    <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="submit">
                        Add new
                    </button>
                </div>
            </form>

        </Admin>
    )
}

export default AddTodoPage