import { createBrowserRouter, Navigate} from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import AdminProduct from "./pages/list";
import AdminProductAdd from "./pages/add";
import AdminProductEdit from "./pages/edit";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutAdmin />,
        children: [
            {
                children: [
                    { index: true, element: <Navigate to="product" /> },
                    { path: "product", element: <AdminProduct /> },
                    { path: "/product/add", element: <AdminProductAdd /> },
                    { path: "/product/:idProduct/edit", element: <AdminProductEdit /> },
                ],
            },
        ],
    },
    { path: "*", element: "Not Found Page" },
    { path: "signup", element: <Signup /> },
    { path: "signin", element: <Signin /> },

]);
