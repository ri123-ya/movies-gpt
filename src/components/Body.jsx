import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
  return (
    <div className='text-yellow-600'>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
