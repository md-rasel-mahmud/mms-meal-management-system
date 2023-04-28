import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/',
        element: <About/>
    }
])

export default router;