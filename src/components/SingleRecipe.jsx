import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function SingleRecipe() {

    const { recipe } = useParams()

    const loader  = useLoaderData()

    console.log(loader)


    const totalNutrients = loader?.hits[0].recipe?.totalNutrients

    // for(const nutrientKey in totalNutrients) {
    //   if(totalNutrients.hasOwnProperty(nutrientKey)) {
    //     const nutrient = totalNutrients[nutrientKey]
    //     const {label, quantity, unit} = nutrient
    //     console.log( label + '' + Math.round(quantity) + '' + unit)

    //   }
    // }

    function NutrientList({ nutrients }) {
      return (
        <div>
          {Object.keys(nutrients).map((nutrientKey, key) => {
            const nutrient = nutrients[nutrientKey];
            console.log(nutrient);
            return (
              <div className='flex gap-2 p-1  space-y-2 items-center justify-start' key={key}>
                <p className='font-semibold' key={key}>{nutrient ? nutrient.label : <p>...</p>}</p>
                <p key={key}>{nutrient ? Math.round(nutrient.quantity) : <p>...</p>}</p>
                <p key={key}>{nutrient ? nutrient.unit : <p>...</p>}</p>
              </div>
            );
          })}
        </div>
      );
    }

    




  return (
    <div className='w-full py-10'>
      <div className='container mx-auto '>

        <div className='flex flex-col justify-center items-center space-y-4'>
           <p className='text-[28px] font-semibold'>{loader?.hits[0].recipe?.label}</p>
           <div className='gap-2 flex flex-wrap items-center justify-center text-[14px]'>{loader?.hits[0].recipe?.healthLabels.map((el, index) => {
            return (
              <p key={index}>
                #{el}
              </p>
            )
           })}</div>
          <img className='w-96 object-contain' src={loader?.hits[0].recipe?.image} alt="current_img_of_recipe" />
        </div>
        
         <div className='mt-10 flex items-start justify-between'>
          <div className='flex flex-col space-y-12'>
            <div className='flex justify-start items-start  gap-4'>
              <p className='text-[gray]'>dietLabe: <span className='text-[orange]'>{loader?.hits[0].recipe?.dietLabels[0]} </span>|</p>
              <p className='text-[gray]'>dishType: <span className='text-[orange]'>{loader?.hits[0].recipe?.dishType[0]}</span> |</p>
              <p className='text-[gray]'>mealType: <span className='text-[orange]'>{loader?.hits[0].recipe?.mealType[0]}</span>  |</p>
            </div>

            <div>
              <p className='text-[20px] font-black'>Ingredients</p>
            </div>
      

          </div>

        

          <div className='flex flex-col gap-2'>
            <p className='text-[20px] font-black'>Nutrition Facts</p>
            <div className='border-2 rounded-3xl p-2 flex items-center justify-center'>
              <NutrientList nutrients={totalNutrients}/>
              
            </div>
          </div>
         </div>
      </div>
     
    </div>
  )
}

export const singleRecipeLoader = async({params}) => {
  const APP_ID = 'f2b3560b'
  const APP_KEY = '74cfb48f70a2e9a9209e4dad849e41f1'

  const {recipe} = params
  let data = await fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30&calories=0-2000&health=alcohol-free`)
  return data.json()
} 

export default SingleRecipe
