import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Admin from './Layouts/admin';
import Website from './Layouts/website';
import About from './pages/website/About';
import Addcate from './pages/admin/category/add';
import Listcate from './pages/admin/category/list';
import AddTodoPage from './pages/admin/product/add';
import Listproduct from './pages/admin/product/list';
import DetailProduct from './pages/website/Detail';
import Home from './pages/website/Home';
import NotFound from './pages/website/NotFound';
import SignIn from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import Updatecate from './pages/admin/category/update'
import HomePage from './Layouts/HomePage';
import ListProduct from './pages/website/Shop';
import Contact from './pages/website/Contact';
import Dashboard from './pages/admin/dashboard';
import Updateproduct from './pages/admin/product/update';
import PrivateRoute from './auth/PrivateRoute';
import InforUser from './pages/user/InforUser';
import AdminRoute from './auth/AdminRoute';
import Products from './components/Test';
import ProductBycate from './pages/website/ProductBycate';
import Test from './components/Test';
import CateHome from './pages/website/CateHome';
import Listcontact from './pages/admin/contact/list';
const Routers = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/admin/:path?">
                        {/* <Admin > */}
                           <Switch>
                               <AdminRoute exact path="/admin/dashboard">
                                    <Dashboard {...props}/>
                               </AdminRoute>
                               <AdminRoute exact path="/admin/product/add">
                                    <AddTodoPage {...props}/>
                               </AdminRoute>
                               <AdminRoute exact path="/admin/product/list">
                                    <Listproduct {...props}/>
                               </AdminRoute>
                               <AdminRoute exact path="/admin/category/list">
                                    <Listcate {...props}/>
                               </AdminRoute>
                               <AdminRoute exact path="/admin/category/add">
                                    <Addcate {...props} />
                               </AdminRoute>
                               <AdminRoute exact path="/admin/contact/list">
                                    <Listcontact {...props}/>
                               </AdminRoute>
                               <Route exact path="/admin/category/update/:id">
                                    <Updatecate {...props}/>
                               </Route>
                               <Route exact path="/admin/product/update/:id">
                                    <Updateproduct {...props}/>
                               </Route>
                           </Switch>
                        {/* </Admin> */}
                    </Route>
                    <Route>
                        {/* <Website> */}
                            <Switch>
                                <Route exact path="/"  >
                                    <Home {...props}/> 
                                </Route>
                                <Route exact path="/homecate/:id"  >
                                    <CateHome {...props}/> 
                                </Route>
                                <PrivateRoute exact path="/inforuser">
                                    <InforUser />
                                </PrivateRoute>
                                <Route path="/about" exact component={About} />
                                <Route path="/contact" exact >
                                    <Contact {...props}/>    
                                </Route>
                                <Route path="/product/:id" exact >
                                    <DetailProduct {...props}/>    
                                </Route>
                                <Route path="/signin" >
                                    <SignIn />    
                                </Route>
                                <Route path="/signup" >
                                    <SignUp {...props}/>
                                </Route>
                                <Route path="/product" exact>
                                    <ListProduct {...props}/>
                                </Route>
                                <Route exact path="/prodbycate/:id" > 
                                    <ProductBycate {...props}/>
                                </Route>
                                <Route exact path="/test">
                                    <Test {...props}/>    
                                </Route>
                                <Route path="/*"  exact component={NotFound}/>
                            </Switch>
                        {/* </Website> */}
                    </Route>
                </Switch>
                
            </BrowserRouter>
        </div>
    )
}

export default Routers;