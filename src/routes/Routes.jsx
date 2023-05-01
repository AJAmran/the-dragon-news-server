import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
      path: '/',  
      element:<LoginLayout></LoginLayout>,
      children: [
        {
            path: '/',
            element: <Navigate to="/category/0"></Navigate>
        },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      }, 
      {
        path:'/terms',
        element: <Terms></Terms>
      }
      ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            {
                path: ':id',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <PrivateRoute>
                  <News></News>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;