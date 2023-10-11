import React from 'react'

function Card({item, index}) {
  return (
    <div className='w-full flex justify-center items-start flex-col mt-4'>
        <p className='text-[gray] text-[14px]'>{item ? item.recipe.dishType[0] : '?'}</p>
        <p>{item.dietLabels}</p>
        <img className='w-[450px] object-contain rounded-2xl' src={item.recipe.image} alt="recipe-Img" />
        <p className='font-semibold mt-2 text-[22px]'>{item.recipe.label}</p>
        <p className='mt-1 text-[18px]'>Calories: {Math.round(item.recipe.calories)}</p>
        <p className='text-[#ff7c54] text-[16px]'>{item ? item.recipe.mealType[0] : '?'}</p>

    </div>
  )
}

export default Card
