export const signinAction = (user)=>{
    console.log(user)
    return {
        type:'SIGNIN',
        payload:user
    }
}
export const signoutAction = ()=>{
    localStorage.removeItem('cart')
    return {
        type:'SIGNOUT'
    }
}