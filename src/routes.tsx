import { createBrowserRouter } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ListProduct from "./pages/listProduct";
import AddProduct from "./pages/addProduct";
import EditProduct from "./pages/editProduct";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutAdmin/>,
        children:[
            {path:'/', element: <ListProduct/>},
            {path:'/product/add', element: <AddProduct/>},
            {path:'/product/edit/:id', element: <EditProduct/>},
            {path:'/signup', element: <Signup/>},
            {path:'/signin', element: <Signin/>}
        ]
    }
    
])