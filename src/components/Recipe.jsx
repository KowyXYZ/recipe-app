import React, { useEffect, useRef, useState } from 'react'
import renderRecipe from '../utils/renderRecipe'
import srch from '../assets/Search.png'
import Card from './Card'


function Recipe() {

    const [recipe, setRecipe] = useState([])

    const [search, setSearch] = useState('chicken')

    const [textBox, setTextBox] = useState('')

    useEffect(() => {
      renderRecipe(search).then((data) => setRecipe(data.hits))

    }, [])

    const handleSubmit = async () => {

        if(textBox === '') {
            return 
        } 

        renderRecipe(textBox).then((data) => setRecipe(data.hits))
        console.log(recipe)
    }

    
  return (
    <div className='w-full py-6'>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <div className='gap-2 flex items-center justify-center'>
            <input className='border-2 rounded-2xl p-2 outline-none' type="text"  onChange={(e) => setTextBox(e.target.value)} placeholder='Search. . . '/>
            <img className='w-10 h-10 p-2  rounded-2xl border-2 object-contain cursor-pointer' src={srch} alt="search" onClick={handleSubmit}/>
        </div>

        <div className='mt-14 flex gap-10 flex-wrap flex-row'>
          { recipe ? 
            recipe.map((el, index) => {
              return(
                <Card item={el} index={index}/>
              )
            }) : <p>Loading...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Recipe
