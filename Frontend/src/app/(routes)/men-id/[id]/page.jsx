
import GlobalApi from '@/app/_utils/GlobalApi'
import Product from '@/app/product/Product'
import React from 'react'

const MenId = async ({params}) => {
    const product = await GlobalApi.getMensById(params.id)
    //console.log("API Response:", product);
  return (
    <div>
      <Product product={product} id={params.id}/> 
    </div>
  )
}

export default MenId
