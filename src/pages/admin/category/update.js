import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CategoryApi from '../../../api/CategoryApi';
import Admin from '../../../Layouts/admin';
import swal from 'sweetalert';
const Updatecate = ({ onUpdateCate }) => {
    const { id } = useParams();
    const history = useHistory();
    const [detailCate, setDetail] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues:{
            name:detailCate.name,
            description:detailCate.description,
            image:detailCate.image    
            }
    });
    useEffect(() => {
        const listCategory = async () => {
            const { data: category } = await CategoryApi.get(id);
            setDetail(category);
            reset(category);
        }
        listCategory();
    }, []);

    const onSubmit = (data) => {
        let uploads = new FormData();
        if(data.imageNew.length ===0){
            uploads.append('name', data.name);
            uploads.append('description',data.description);
            onUpdateCate(uploads,data._id);
            swal("You updated success!", "...comeback to list!");
            history.push('/admin/category/list');
        }else{
            uploads.append('name', data.name);
            uploads.append('description',data.description);
            uploads.append('image',data.imageNew[0])
            onUpdateCate(uploads,data._id);
            swal("You updated success!", "...comeback to list!");
            history.push('/admin/category/list');
        }
    }
    return (
        <Admin title="Detail category">
            <form className="w-full max-w-3xl ml-12 mt-8" id="form-add" onSubmit={handleSubmit(onSubmit)} >

                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
                            Name
                        </label>
                        <input id="name_cate" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white `}
                            defaultValue={detailCate.name}
                            {...register('name', { required: true })} type="text"  />
                            
                            {errors.name  && <span className="text-red-500">* Name required</span>}
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
                               `}
                                placeholder="Image"
                                {...register('imageNew')} id="image_category" type="file" />
                                
                                <img  className="w-32 " src={`http://localhost:4000/api/category/image/${detailCate._id}`}/>
                                
                                <input type="hidden" defaultValue={detailCate.image} {...register("imageOld")} />
                                
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Description
                        </label>
                        <textarea id="description_product" cols={30} rows={5} type="text" className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                            ${errors.description ? 'border border-red-500' : ''}`}
                            placeholder="description"
                            defaultValue={detailCate.name}
                            {...register('description', { required: true })} />
                            {errors.description && 
                            <span className="text-red-500">* Description required</span>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/5 " />
                    <button className="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4" type="submit">
                        Update
                    </button>
                </div>
            </form>
        </Admin>
    )
}

export default Updatecate
