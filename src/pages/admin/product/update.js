import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CategoryApi from '../../../api/CategoryApi';
import { useParams } from 'react-router-dom';
import Admin from '../../../Layouts/admin';
import ProductApi from '../../../api/ProductApi';
import swal from 'sweetalert';
const Updateproduct = ({ onUpdatePro, Categories }) => {
    let { id } = useParams();
    let history = useHistory();
    const [detailPro, setDetail] = useState({});
    const [cate, setCate] = useState({});
    console.log(cate);
    // const onHadleCategory = ({ value }) => {
    //     setCate(value);
    // }
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            name: detailPro.name,
            image: detailPro.image,
            description: detailPro.description,
            quantity: detailPro.quantity,
            price: detailPro.price,
            categoryId: detailPro.categoryId
        }
    });
    
    useEffect(()=>{
        const cateId = async () =>{
            const {data:category} =await CategoryApi.get(detailPro.categoryId);
            setCate(category);
        }
        cateId();
    },[]);
    const onSubmit = (data) => {
        let uploads = new FormData();
        if (data.imageNew.length === 0) {
            uploads.append("name", data.name);
            uploads.append("price", data.price);
            uploads.append("description", data.description);
            uploads.append("quantity", data.quantity);
            uploads.append("categoryId", data.categoryId);
            uploads.append("status", data.status);
            swal("You updated success!", "...comeback to list!");
            onUpdatePro(uploads, data._id);
            // history.push('/admin/product/list');
            console.log(data);
        } else {
            uploads.append("name", data.name);
            uploads.append("price", data.price);
            uploads.append("description", data.description);
            uploads.append("quantity", data.quantity);
            uploads.append("categoryId", data.categoryId);
            uploads.append("status", data.status);
            uploads.append("image", data.imageNew[0])
            swal("You updated success!", "...comeback to list!");
            onUpdatePro(uploads, data._id);
            // history.push('/admin/product/list');
            console.log(data);
        }
    }
    return (
        <Admin title="Detail product">
            <form className="w-full max-w-3xl ml-32 mt-8" id="form-add" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input id="name_product"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                            ${errors.name ? 'border border-red-500' : ''}`}
                            {...register('name', { required: true })} type="text" placeholder="Name product"
                            defaultValue={detailPro.name}
                        />
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
                            defaultValue={detailPro.price}
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
                            defaultValue={detailPro.description}
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
                        <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
                            placeholder="Image"
                            {...register('imageNew')} id="image_product" type="file" />

                        <img className="w-32 " src={`http://localhost:4000/api/product/image/${detailPro._id}`} />

                        <input type="hidden" defaultValue={detailPro.image} {...register("imageOld")} />

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
                            defaultValue={detailPro.quantity}
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
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                {...register('categoryId', { required: 
                                {value:true,message:"Category is required"} })} >
                                    <option value={cate._id}>{cate.name}</option>
                                    {Categories.map((cate, index) => (
                                        <option  
                                            value={cate._id} key={index}>{cate.name}</option>
                                    ))}
                                </select>
                         
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        
                                <span className="text-red-500">{errors.categoryId && errors.categoryId.message }  </span>
                                {/* <span className="text-red-500">* Category is required</span> */}
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
                        Update
                    </button>
                </div>
            </form>

        </Admin>
    )
}

export default Updateproduct
