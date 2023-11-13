import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./global.css";
import HomeRevised2 from "./pages/HomeRevised2";
import AboutUsRevised3 from "./pages/AboutUsRevised3";
import CapabilitiesRevised from "./pages/CapabilitiesRevised";
import EnquiryRevised3 from "./pages/ContactUs";
import Error from "./components/base-ui-components/Error";
import ProductsPage from "./pages/ProductsPage";

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([{
    path: "", element: <App/>, children: [{
        path: "", element: <HomeRevised2/>,
    }, {
        path: '/home', element: <HomeRevised2/>,
    }, {
        path: '/about-us', element: <AboutUsRevised3/>,
    }, {
        path: '/capabilities', element: <CapabilitiesRevised/>,
    },{
        path: '/products', element: <ProductsPage/>,
    }, {
        path: '/contact-us', element: <EnquiryRevised3/>,
    }, {
        path: "*", element: <Error/>
    }]
},], {
    basename: "/Arks"
});
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
