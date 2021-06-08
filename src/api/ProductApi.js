import { axiosClient } from './axiosClient';
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
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    add(product){
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    edit(id,product){
        const url = `/product/${id}`;
        return axiosClient.put(url,product);
    }

}
export default ProductApi;