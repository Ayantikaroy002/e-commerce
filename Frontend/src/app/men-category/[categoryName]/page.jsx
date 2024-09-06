
import GlobalApi from '@/app/_utils/GlobalApi'
import Items from '@/app/items/Items'
import React from 'react'

const MenCategory = async ({params}) => {
    const productList = await GlobalApi.getMensByCategory(params.categoryName)
    //console.log("API Response:", productList);
  return (
    <div>
      <Items productList={productList} categoryName={params.categoryName}/> 
     
    </div>
  )
}

export default MenCategory