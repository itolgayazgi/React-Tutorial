import React from 'react'
import JsxEventExample from '../Examples/JsxEventExample';
import StateArraySample from '../Examples/StateArraySample';
import StateErrorSample from '../Examples/StateErrorSample';
import StateExample from '../Examples/StateExample';
import StateExample2 from '../Examples/StateExample2';
import StateInputArraySample from '../Examples/StateInputArraySample';
import ProductDetail from './ProductDetail'
import ProductHeader from './ProductHeader'

function Product() {

    
    let productDetail = {
        name:'Iphone',
        price:10000,
        ozellikler: ['Suya Dayanıklılık','x px kamera',"şarj aleti ücretli"]
    };

    const addCard = () => {
        alert('Ürün Sepete Eklendi')
      }

  return (

    <>
     
        {/* <StateExample></StateExample>
        <StateExample2></StateExample2>
        <StateArraySample></StateArraySample> */}
        {/* <StateInputArraySample></StateInputArraySample> */}
        <StateErrorSample></StateErrorSample>
    </>
  )
}

export default Product