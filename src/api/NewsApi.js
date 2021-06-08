import { axiosClient } from './axiosClient';
const NewsApi = {
    getAll(){
        const url = `/news`;
        return axiosClient.get(url);
    },
    get(id){
        const url = `/new/${id}`;
        return axiosClient.get(url);
    },
    getSort2(){
        const url =`/news?_sort=date&_order=desc`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/new/${id}`;
        return axiosClient.delete(url);
    },
    add(news){
        const url = `/new`;
        return axiosClient.post(url,news);
    },
    edit(id,news){
        const url = `/new/${id}`;
        return axiosClient.put(url,news);
    }

}
export default NewsApi;