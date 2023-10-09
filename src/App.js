import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./components/Home";


function App() {

  const APP_ID = 'f2b3560b'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
      </Route>

    )
  )



  return (
      <RouterProvider router={router}/>
  );
}

export default App;
