// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Routers from './Router.js';
import ProductApi from './api/ProductApi.js';
import NewsApi from './api/NewsApi.js';
import CategoryApi from './api/CategoryApi.js'
import { Router } from 'react-router';
import Addcate from './pages/admin/category/add';
import UserApi from './api/userApi';
function App() {


  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [users, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [updateCategory,setUpdateCategory] = useState();
  // useEffect(() => {
  //   const listBlog = async () => {
  //     try {
  //       const { data: blog } = await blogAPI.getAll();
  //       setBlog(blog);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   listBlog();
  // }, [])

  useEffect(() => {
    const listProduct = async () => {
      try {
        const { data: product } = await ProductApi.getAll();
        setProducts(product);

      } catch (error) {
        console.log(error);
      }
    }

    listProduct();
  }, []);


  useEffect(() => {
    const listCategory = async () => {
      try {
        const { data: category } = await CategoryApi.getAll();
        setCategory(category);
      } catch (error) {
        console.log(error);
      }
    }
    listCategory();
  }, []);

  const handleAdd = async (product ) => {
    try {
      const {data:productFake} = await ProductApi.add(product);
      const newArr = [...products,productFake ];
      setProducts(newArr);
    } catch (error) {
      console.log(error.response);
    }
  }

  const handleRemove = async (id) => {
    try {
      const newProd = products.filter(item => item._id !== id);
      window.confirm('Do you want delete ?') && setProducts(newProd);
      await ProductApi.remove(id);
    } catch (error) {
      console.log(error);
    }
  }

  const AddCate = async (category) => {
    try {
      const{data:categoryFake} = await CategoryApi.add(category);
      const newArr = [...categories, categoryFake];
      setCategory(newArr);
    } catch (error) {
      console.log(error.response);
    }
  }

  const RemoveCate = async (id) => {
    try {
      const newCate = categories.filter(item => item._id !== id);
      window.confirm('Do you want delete ?') && setCategory(newCate);
      await CategoryApi.remove(id);
    } catch (error) {
      console.log(error);
    }
  }

  const UpdateCate = async (category,fakeCate) => {
    try {
       await CategoryApi.edit(fakeCate,category);
      const findIndex = categories.findIndex(items => items._id === fakeCate);
      const newCategory = [...categories];
      newCategory.splice(findIndex, 1, fakeCate);
      setCategory(newCategory)
    } catch (error) {
      console.log(error);
    }
  }
  const UpdatePro = async (product,fakePro) => {
    try {
      await ProductApi.edit(fakePro,product);
      const findIndex = products.findIndex(items => items._id === fakePro);
      const newProduct = [...products];
      newProduct.splice(findIndex, 1, fakePro);
      setProducts(newProduct)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Routers
      Products={products}
      Categories={categories}
      // Blog={blog}
      onRemove={handleRemove}
      onAdd={handleAdd}
      onRemoveCate={RemoveCate}
      onAddCate={AddCate}
      onUpdateCate={UpdateCate}
      onUpdatePro={UpdatePro}
    />
    
  );

}

export default App;