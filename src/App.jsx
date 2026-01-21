import { HashRouter as Router, Routes, Route, Link } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import ShopLayout from "./projects/shopping/shopping-layouts/ShopLayout";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ShopHomePage from "./projects/shopping/shopping-pages/ShopHomePage";
import ContactMePage from "./pages/ContactMePage";
import ClothArticleLayout from "./projects/shopping/shopping-layouts/ClothArticleLayout";
import clothesData from "../clothes.json";
import CalendarHomePage from "./projects/calendar-filter/calendar-pages/CalendarHomePage";
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact-me" element={<ContactMePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Route>

        <Route path="/projects/shop/" element={<ShopLayout />}>
          <Route path="/projects/shop/home" element={<ShopHomePage />} />
          <Route
            path="/projects/shop/home/:id"
            element={<ClothArticleLayout list={clothesData} />}
          />
        </Route>

        <Route
          path="/portfolio/calendar"
          element={<CalendarHomePage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
