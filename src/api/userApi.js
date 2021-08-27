import { axiosClient } from './axiosClient.js';

const UserApi = {
	getAll(){
		const url = `/users`;
		return axiosClient.get(url); // tạo ra 1 đường linh đến db để lấy dữ liệu
	},
	get(id){
		const url = `/user/${id}`;
		return axiosClient.get(url);
	},
	signout(){
		const url = `/signout`;
		return axiosClient.get(url);
	},
	signin(user){
		const url = `/signin`;
		return axiosClient.post(url,user);
	},
	add(user){
		const url = `/signup`;
		return axiosClient.post(url, user);
	},
	remove(id){
		const url = `/users/${id}`;
		return axiosClient.delete(url);
	},
	update(id, data){
		const url = `/user/${id}`;
		return axiosClient.put(url, data);
	},
	checkAdmin(id,token){
		const url = `/checkAdmin/${id}`;
		return axiosClient.get(url,{
			headers:{Authorization: `Bearer${token}`}
		})
	}

}
export default UserApi;