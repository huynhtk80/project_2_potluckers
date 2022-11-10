import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import MealPlanningRecipes from "./pages/MealPlanningRecipes";
import ExistingEvents from "./pages/ExistingEvents";
import PlanYourOwnEvent from "./pages/PlanYourOwnEvent";

import "./styles.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Index />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route
              path="/MealPlanningRecipes"
              element={<MealPlanningRecipes />}
            />
            <Route path="/ExistingEvents" element={<ExistingEvents />} />
            <Route path="/PlanYourOwnEvent" element={<PlanYourOwnEvent />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
