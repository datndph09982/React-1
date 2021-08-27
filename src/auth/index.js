import UserApi from "../api/userApi";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, setCart,deleteAllCart } from '../action/cartAction';
// import { useHistory } from 'react-router';
// const dispatch = useDispatch();
export const signOut = (next) =>{
    if(typeof window !="undefined"){
        localStorage.removeItem('user');
        next();
        try {
             UserApi.signout()
            //  .then(()=>{
            //      dispatch(deleteCart());
            //  })
        } catch (error) {
            console.log(error);
        }
    }
}
// const cart = useSelector(data=>data.cart.data);
// const history = useHistory();
// export const signOutClear = ()=>{

// }
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
