import {useEffect} from "react";
import {
    useNavigationType,
    useLocation,
    Outlet
} from "react-router-dom";
import Navbar from "./components/base-ui-components/Navbar";
import Footer from "./components/Footer";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
            case "/enquiry-revised-3":
                title = "";
                metaDescription = "";
                break;
            case "/about-us-revised-3":
                title = "";
                metaDescription = "";
                break;
            case "/home-revised-2":
                title = "";
                metaDescription = "";
                break;
            case "/home-revised":
                title = "";
                metaDescription = "";
                break;
            case "/about-us-revised":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);


    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
