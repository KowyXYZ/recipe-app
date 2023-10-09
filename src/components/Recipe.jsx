import React, { useEffect, useRef, useState } from 'react'
import renderRecipe from '../utils/renderRecipe'
import srch from '../assets/Search.png'


function Recipe() {

    const [recipe, setRecipe] = useState({})

    const [search, setSearch] = useState('chicken')

    const [textBox, setTextBox] = useState('')

    useEffect(() => {
      renderRecipe(search).then((data) => setRecipe(data))
    }, [])

    const handleSubmit = async () => {

        if(textBox === '') {
            return 
        } 

        renderRecipe(textBox).then((data) => setRecipe(data))
        console.log(recipe)
    }

    
  return (
    <div className='w-full'>
      <div className='container mx-auto flex justify-center items-center'>
        <div className='gap-2 flex items-center justify-center'>
            <input className='border-2 rounded-2xl p-2 outline-none' type="text"  onChange={(e) => setTextBox(e.target.value)} placeholder='Search. . . '/>
            <img className='w-10 h-10 p-2  rounded-2xl border-2 object-contain cursor-pointer' src={srch} alt="search" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default Recipe
