
const APP_ID = 'f2b3560b'
const APP_KEY = '74cfb48f70a2e9a9209e4dad849e41f1'

const renderRecipe = async (search) => {
    let data = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
    return data.json()
}

export default renderRecipe
