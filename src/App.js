import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CapabilitiesRevised from "./pages/CapabilitiesRevised";
import EnquiryRevised3 from "./pages/EnquiryRevised3";
import AboutUsRevised3 from "./pages/AboutUsRevised3";
import HomeRevised2 from "./pages/HomeRevised2";

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
    <Routes>
      <Route path="/" element={<HomeRevised2 />} />
      <Route path="/home" element={<HomeRevised2 />} />
      <Route path="/about-us" element={<AboutUsRevised3 />} />
      <Route path="/capabilities" element={<CapabilitiesRevised />} />
      <Route path="/contact-us" element={<EnquiryRevised3 />} />
    </Routes>
  );
}
export default App;
