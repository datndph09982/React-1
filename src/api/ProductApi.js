import { axiosClient } from './axiosClient';
import {isAuthenticate} from '../auth';
const {user, token} = isAuthenticate();
const ProductApi = {
    getAll(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getimage(id){
        const url = `/product/image/${id}`;
        return axiosClient.get(url);
    },
    param(id){
        const url = `/${id}`;
        return axiosClient.param(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    getlist(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getlist2(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    getRelated(id){
        const url = `/product/related/${id}`;
        return axiosClient.get(url);
    },
    getSort(){
        const url =`/products`;
        return axiosClient.get(url);
    },
    getSort2(){
        const url =`/productsDesc`;
        return axiosClient.get(url);
    },
    
    getsearch(search){
        const url=`/posts?q=${search}`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/product/${id}/${user._id}`;
        return axiosClient.delete(url,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
    },
    add(product){
        const url = `/products/${user._id}`;
        return axiosClient.post(url, product
            ,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }
        );
    },
    edit(id,product){
        const url = `/product/${id}/${user._id}`;
        return axiosClient.put(url,product
            ,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }
        );
    }

}
export default ProductApi;