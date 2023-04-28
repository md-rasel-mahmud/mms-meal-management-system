import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Bazar from "../components/Bazar/Bazar";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/',
                element: <Banner/>
            },
            {
                path: 'bazar',
                element: <Bazar/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
])

export default router;
