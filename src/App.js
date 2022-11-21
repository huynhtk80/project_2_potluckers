import Navbar from "./components/Navbar";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import MealPlanningRecipes from "./pages/MealPlanningRecipes";
import ExistingEvents from "./pages/ExistingEvents";
import PlanYourOwnEvent from "./pages/PlanYourOwnEvent";

import "./styles.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Notfound from "./pages/Notfound";
import UserAuth from "./pages/UserAuth";
import FullRecipe from "./components/FullRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/home" element={<Navbar />}>
            <Route index element={<Index />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route
              path="MealPlanningRecipes"
              element={<MealPlanningRecipes />}
            />
            <Route path="ExistingEvents" element={<ExistingEvents />} />
            <Route path="PlanYourOwnEvent" element={<PlanYourOwnEvent />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="UserAuth" element={<UserAuth />} />
            <Route path="fullrecipe/" element={<FullRecipe />} />

            <Route path="*" element={<Notfound />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
