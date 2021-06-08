import UserApi from "../api/userApi";

export const signOut = (next) =>{
    if(typeof window !="undefined"){
        localStorage.removeItem('user');
        next();
        try {
             UserApi.signout();
        } catch (error) {
            console.log(error);
        }
    }
}
export const authenticate = (data,next) =>{
    // console.log(data);
    if(typeof window !== 'undefined'){
        localStorage.setItem('user',JSON.stringify(data))
        next();
    }
}
export const isAuthenticate = ()=>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('user')){
        return JSON.parse(localStorage.getItem('user'))
    }else{
        return false;
    }
}
