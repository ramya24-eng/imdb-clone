import Main from "./container/Main"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WishList from "./container/WishList"
import Layout from "./container/Layout"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/home",
        element: <Main />,
        children:[]
      },
      {
        path:"/wishlist",
        element: <WishList />
      }
    ]
  }
])
export default function App() {
  return (
    <RouterProvider router={router}>
           <Main/>
    </RouterProvider>   
  )
}
