import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import aaa from './product.module.css'
import Loader from '../Loader/Loader'

const Product = () => {
    const [products, setProducts] = useState()
    const [isLoading, setIsloading] = useState(false)
    useEffect(()=>{
        setIsloading(true)
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProducts(res.data)
            setIsloading(false)
        }).catch((err)=>{
            console.log(err)
            setIsloading(false)
        })
    }, [])

  return (
    <>
    {
        isLoading?(<Loader/>):(
            <section className={aaa.products_container}>
        {
            products?.map((singleProduct)=>{
                return <ProductCard product={singleProduct} key={singleProduct.id}
                renderAdd={true}
                />
            })
        }
    </section>
        )
    }
    </>
  )
}

export default Product