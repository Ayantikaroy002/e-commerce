
import GlobalApi from '@/app/_utils/GlobalApi'
import Items from '@/app/items/Items'
import React from 'react'

const WomenCategory = async ({params}) => {
    const productList = await GlobalApi.getWomensByCategory(params.categoryName)
    console.log("API Response:", productList);
  return (
    <div>
        product category list {params.categoryName}
      <Items productList={productList} categoryName={params.categoryName}/> 
     
    </div>
  )
}

export default WomenCategory
