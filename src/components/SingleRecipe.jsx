import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Checkbox from 'antd/es/checkbox/Checkbox'
import { useEffect, useState } from 'react'
import renderRecipe from '../utils/renderRecipe'
import Card from './Card'

function SingleRecipe() {

    const { recipe } = useParams()

    const loader  = useLoaderData()

    const [search, setSearch] = useState('strawberry')



    const [reciper, setReciper] = useState([])

    const slicedData = reciper?.slice(10, 14)
    console.log(loader)

    useEffect(() => {
        renderRecipe(search).then((data) => setReciper(data.hits))
      }, [])
  

    const totalNutrients = loader?.hits[0].recipe?.totalNutrients
    const totalIngredients = loader?.hits[0].recipe?.ingredientLines


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

            return (
              <div className='flex gap-3 p-1 text-[20px]  items-center justify-center sm:justify-start' >
                <p className='font-semibold' >{nutrient ? nutrient.label : <p>...</p>}</p>
                <p >{nutrient ? Math.round(nutrient.quantity) : <p>...</p>}</p>
                <p >{nutrient ? nutrient.unit : <p>...</p>}</p>
              </div>
            );
          })}
        </div>
      );
    }

    function IngList({Ingredients}){
      return(
        <div className='flex flex-col gap-4 mt-2'>
          {Ingredients.map((ingKey) => {
            return(
              <Checkbox className='text-[22px]'>{ingKey}</Checkbox>
            )
          })}
        </div>
      )
    }

    




  return (
    <div className='w-full py-10'>
      <div className='container mx-auto flex flex-col'>

        <div className='flex flex-col justify-center items-center space-y-4'>
           <p className='text-[36px] font-black'>{loader?.hits[0].recipe?.label}</p>
           
          <img className='sm:w-1/3 rounded-2xl object-contain' src={loader?.hits[0].recipe?.image} alt="current_img_of_recipe" />
          <div className='gap-2 flex flex-wrap w-[300px] sm:w-[500px] items-center justify-center text-[14px]'>{loader?.hits[0].recipe?.healthLabels.map((el, index) => {
            return (
              <p key={index}>
                #{el}
              </p>
            )
           })}</div>
        </div>
        
         <div className='mt-12 flex sm:flex-row flex-col-reverse sm:items-start justify-between'>
          <div className='flex sm:flex-col flex-col space-y-12'>
            <div className='flex sm:justify-start sm:items-start justify-center items-center mt-2 flex-col sm:flex-row  gap-4'>
              <p className='text-[gray]'>dietLabe: <span className='text-[orange]'>{loader?.hits[0].recipe?.dietLabels[0]} </span>|</p>
              <p className='text-[gray]'>dishType: <span className='text-[orange]'>{loader?.hits[0].recipe?.dishType[0]}</span> |</p>
              <p className='text-[gray]'>mealType: <span className='text-[orange]'>{loader?.hits[0].recipe?.mealType[0]}</span>  |</p>
            </div>

            <div className='flex justify-center items-center sm:items-start flex-col'>
              <p className='text-[24px] font-black'>Ingredients</p>
              <div>
                <IngList Ingredients={totalIngredients}/>
              </div>
              <p className='mt-12 text-[20px] text-[gray]'>Total time to prepare: <span className='text-[red]'>{loader?.hits[0].recipe?.totalTime}min</span></p>
            </div>

            <div className='flex justify-center items-center flex-col'>
              <p className='text-[24px] font-black'>More Recipes</p>
              <div className='flex gap-5 sm:items-start items-center sm:justify-start justify-center flex-wrap'>
                {slicedData.map((el, index) => {
                    return (
                        <Card item={el} key={index}/>
                    )
                  })}
            </div>
            </div>
      

          </div>

        

          <div className='flex flex-col gap-2 justify-center items-center'>
            <p className='text-[24px] font-black'>Nutrition Facts</p>
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
