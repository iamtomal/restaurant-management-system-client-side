import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Sponsor from "../Pages/Home/Sponsor/Sponsor";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddedFoodItems from "../Food/AddedFoodItems/AddedFoodItems";
import AddFood from "../Food/AddedFoodItems/AddFood/AddFood";
import OrderedFood from "../Food/OrderedFood/OrderedFood";


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
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addedFoodItems',
            element:<AddedFoodItems></AddedFoodItems>
        },
        {
            path:'/addFood',
            element:<AddFood></AddFood>
        },
        {
            path:'/orderedFood',
            element:<OrderedFood></OrderedFood>
        },
        
    ]
    },
  ]);


  export default router;