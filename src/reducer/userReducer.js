const userStorage = JSON.parse(localStorage.getItem('user'));
const userState = {
    user: userStorage
}
const userReducer = (state= userState, action)=>{
    switch(action.type){
        case 'SIGNIN':{
            return {
                user:action.payload
            }
        }
        case 'SIGNOUT':{
            return {
                user : ''
            }
        }
        default:
            return state;
    }
}
export default userReducer;