import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {ProductId} = useParams()
  const product = all_product.find((e)=>e.id === Number(ProductId))// This is done for  while the id is compared to the product then it must be same 
  return (
    <div> 
      <Breadcrum product={product} />
    </div> 
  )
}

export default Product
