import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeRevised2 from "./pages/HomeRevised2";
import AboutUsRevised from "./pages/AboutUsRevised";
import HomeRevised from "./pages/HomeRevised";
import AboutUsRevised3 from "./pages/AboutUsRevised3";

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
      <Route path="/about-us" element={<AboutUsRevised3 />} />
    </Routes>
  );
}
export default App;
