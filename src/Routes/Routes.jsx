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
import PrivateRoute from "./PrivateRoute";
import AllFoodItems from "../Food/AllFoodItems/AllFoodItems";
import About from "../About/About";
import FoodDetails from "../Food/FoodDetails/FoodDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[

        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('https://restaurant-management-server-zeta.vercel.app/food')
        },
        {
            path:'/allFood',
            element:<AllFoodItems></AllFoodItems>,
            loader: ()=> fetch('https://restaurant-management-server-zeta.vercel.app/food')
        },
        {
            path: '/sponsor',
            element:<PrivateRoute><Sponsor></Sponsor></PrivateRoute>,
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
            path:'/about',
            element:<PrivateRoute><About></About></PrivateRoute>
        },
        {
            path:'/addedFoodItems',
            element:<PrivateRoute><AddedFoodItems></AddedFoodItems></PrivateRoute>
        },
        {
            path:'/addFood',
            element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path:'/orderedFood',
            element:<PrivateRoute><OrderedFood></OrderedFood></PrivateRoute>
        },
        {
            path:'/foodDetails/:id',
            element: <FoodDetails></FoodDetails>,
            loader: () => fetch('https://restaurant-management-server-zeta.vercel.app/food')
            
        },
        
    ]
    },
  ]);


  export default router;