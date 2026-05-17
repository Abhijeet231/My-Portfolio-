import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

// pages
import About from "../pages/About.jsx"
import Blogs from "../pages/Blogs.jsx";
import Contact from "../pages/Contact.jsx";
import Home from "../pages/Home.jsx";
import Work from "../pages/Work.jsx";


const router = createBrowserRouter([
    // main layout
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "work",
                element: <Work/>
            },
            {
                path: "blogs",
                element: <Blogs/>
            },
            {
                path: "contact",
                element: <Contact/>
            }
        ]
    }
])


export default router;