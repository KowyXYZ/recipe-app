import React, { useEffect, useState } from 'react'
import renderRecipe from '../utils/renderRecipe'
import Card from './Card'

function SliceHomeTwo() {
    const [recipe, setRecipe] = useState([])

    const [search, setSearch] = useState('strawberry')
    const slicedData = recipe?.slice(0, 3)


    useEffect(() => {
        renderRecipe(search).then((data) => setRecipe(data.hits))
        console.log(recipe)
      }, [])
  

  return (
    <div className='w-full py-16'>
      <div className='container text-start mx-auto flex flex-col justify-center items-start'>
        <p className='text-[32px] font-semibold'>Super Delicous Banana Recipes</p>
        <div className='flex gap-5 md:flex-row flex-col'>
            {slicedData.map((el, index) => {
                return (
                    <Card item={el} key={index}/>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default SliceHomeTwo
