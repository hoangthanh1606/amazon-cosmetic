import React from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {

  const [menuProducts, setMenuProducts] = useState(ProductsData);
  const [parent] = useAutoAnimate()

  const handleFilter = (type) => {
    let resultFilter =  ProductsData.filter((product) => product.type === type)
    setMenuProducts(resultFilter)
  }

  return (
    <div className={css.container}>
      <img src={Plane} alt="plane" />
      <h1>Our Feature Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => handleFilter('skin care')}>Skin Care</li>
          <li onClick={() => handleFilter('conditioner')}>Conditioner</li>
          <li onClick={() => handleFilter('foundation')}>Foundation</li>
        </ul>

        <div className={css.productList} ref={parent}>
          {menuProducts?.map((product, index) => (
            <div className={css.product} key={index}>
              <div className="left-slide">
                <div className="name">
                  <span>{product?.name}</span>
                  <span>{product?.detail}</span>
                </div>
                <span>{product?.price}$</span>
                <div>Shop now</div>
              </div>

              <img src={product?.img} alt="Product" className="img-product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products
