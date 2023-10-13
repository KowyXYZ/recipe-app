import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import SingleRecipe, { singleRecipeLoader } from "./components/SingleRecipe";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/recipes" element={<Recipe/>}/>
          <Route path="/recipes/:recipe" element={<SingleRecipe/>} loader={singleRecipeLoader}/>
      </Route>

    )
  )



  return (
      <RouterProvider router={router}/>
  );
}

export default App;
