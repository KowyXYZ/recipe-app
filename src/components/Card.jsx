import React from 'react'
import {Link} from 'react-router-dom'

function Card({item, index}) {

  const filtered = item?.recipe?.label.toLowerCase().split(' ')[0] + '-' + item?.recipe?.label.toLowerCase().split(' ')[1]

    function addHyp(inputStr) {
      const word = inputStr.toLowerCase().split(' ')
      const stringWithHyp = word.join('-')
      return stringWithHyp
    }

  const stringWithHyp = addHyp(item?.recipe?.label)

  return (
    <div className='flex justify-center items-center flex-col mt-4 text-center'>
        <p className='text-[gray] text-[14px]'>{item ? item.recipe.dishType[0] : '?'}</p>
        <p>{item.dietLabels}</p>
        
        <Link to={`/recipes/${stringWithHyp}`}>
        <img className='w-[350px] h-[350px] object-contain rounded-2xl' src={item.recipe.image} alt="recipe-Img" />
        </Link>

        <p className='font-semibold mt-2 text-[20px] w-[300px]'>{item.recipe.label}</p>
        <p className='mt-1 text-[18px]'>Calories: {Math.round(item.recipe.calories)}</p>
        <p className='text-[#ff7c54] text-[16px]'>{item ? item.recipe.mealType[0] : '?'}</p>

    </div>
  
  )
}



export default Card
