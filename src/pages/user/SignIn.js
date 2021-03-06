import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { isAuthenticate,authenticate } from '../../auth';
import UserApi from '../../api/userApi';
import Website from '../../Layouts/website';
const SignIn = ({ signIn,handleSetTitle }) => {
    useEffect(()=>{
        handleSetTitle('Sign in')

    })
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [redirectToref, setRedirectToref] = useState(false);
    const { user } = isAuthenticate();

    const dispatch = useDispatch();
    // const handleSignin = () => {
    //     try {
    //         const dataUser = await UserApi.signin(user);
    //         dispatch(signinAction(dataUser.data));

    //         authenticate(dataUser.data, () => {
    //             setError('');
    //             setRedirectToref(true);
    //             // signIn(user.user);
    //         })
    //     } catch (error) {
    //         setLoading(false);
    //         // console.log(error.response.data.error);
    //         setError(error.response.data.error);
    //     }

    // }

    // const LoginUser = async (user) => {
    //     try {
    //         const dataUser = await UserApi.signin(user);
    //         authenticate(dataUser.data, () => {
    //             setError('');
    //             setRedirectToref(true);
    //             signIn(user.user);
    //         })
    //     } catch (error) {
    //         setLoading(false);
    //         // console.log(error.response.data.error);
    //         setError(error.response.data.error);
    //     }
    // }
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const dataUser = await UserApi.signin(data);
            authenticate(dataUser.data, () => {
                setError('');
                setRedirectToref(true);
                // signIn(user.user);
            })
        signIn(dataUser);
        console.log(dataUser);
        } catch (error) {
            setLoading(false);
            // console.log(error.response.data.error);
            setError(error.response.data.error);
        }
     
    }
    const showError = () => {
        return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            style={{ display: error ? "block" : "none" }}>
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
            </span>
        </div >

    }
    const redirectUser = () => {
        if (redirectToref) {
            if (user.role == 1) {
                return <Redirect to="admin/dashboard" />
            } else {
                return <Redirect to="inforuser" />
            }
        }
    }
    const showLoading = () => {
        return loading && <div className="alert ">
            <h2>...Loading</h2>
        </div>
    }
    return (
        <>
            <div title="Sign In">
                <div className="mt-24 flex items-center justify-center bg-gray-50  sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                Sign in account  </h2>
                            <p className="mt-2 text-center text-sm text-gray-600"> Or
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    start your 14-day free trial</a>
                            </p>
                        </div>
                        {showError()}
                        {showLoading()}
                        {redirectUser()}
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="" className="sr-only">Email c???a b???n</label>
                                    <input id="email" name="email" type="email"
                                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                                    ${errors.email ? 'border border-red-500' : ''}`}
                                        placeholder="Email"
                                        {...register('email', { required: true })}
                                    />
                                    {errors.email && errors.email.type === "required" &&
                                        <span className="text-red-500">* Nh???p email</span>}
                                </div>

                                <div>
                                    <label htmlFor="" className="sr-only">M???t kh???u</label>
                                    <input id="password" name="password" type="password"
                                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 
                                    ${errors.Image ? 'border border-red-500' : ''}`}
                                        placeholder="M???t kh???u"
                                        {...register('password', { required: true })}
                                    />
                                    {errors.password && errors.password.type === "required" &&
                                        <span className="text-red-500">* Nh???p password</span>}
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    ????ng nh???p
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SignIn

