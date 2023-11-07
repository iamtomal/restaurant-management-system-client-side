import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Sponsor from "../Pages/Home/Sponsor/Sponsor";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[

        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/sponsor',
            element:<Sponsor></Sponsor>,
            loader: ()=> fetch('/sponsor.json')
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        
    ]
    },
  ]);


  export default router;