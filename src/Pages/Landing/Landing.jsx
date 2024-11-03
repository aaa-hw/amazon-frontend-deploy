import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import CarouselEffect from '../../Components/Carousel/CarouselEffect'
import Product from '../../Components/Products/Product'
import Category from '../../Components/Category/Categories'

const Landing = () => {
  return (
    <LayOut>
        <CarouselEffect/>
        <Category/>
        <Product/>
    </LayOut>
  )
}

export default Landing