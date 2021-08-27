import { axiosClient } from './axiosClient';
import {isAuthenticate} from '../auth';
const {user, token} = isAuthenticate();
const CategoryApi = {
    getAll(){
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    param(id){
        const url = `/${id}`;
        return axiosClient.param(url);
    },
    getimage(id){
        const url = `/category/image/${id}`
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/category/${id}/${user._id}`;
        return axiosClient.delete(url,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
    },
    add(category){
        const url = `/category/${user._id}`;
        return axiosClient.post(url, category,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
    },
    edit(id,category){
        const url = `/category/${id}/${user._id}`;
        return axiosClient.put(url,category,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        });
    }
    
}
export default CategoryApi;