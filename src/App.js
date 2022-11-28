import Navbar from "./components/Navbar";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Aboutus from "./pages/Aboutus";
import MealPlanningRecipes from "./pages/MealPlanningRecipes";
import ExistingEvents from "./pages/ExistingEvents";
import PlanYourOwnEvent from "./pages/PlanYourOwnEvent";

// import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Notfound from "./pages/Notfound";
import FullRecipe from "./components/FullRecipe";
import Login from "./pages/Login_component";
import SignUp from "./pages/Signup_component";
import UserDetails from "./components/UserDetails";
import ExistingEventsLanding from "./pages/ExistingEventsLanding";
import TermsOfUse from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PlayingNavBar from "./components/PlayingNavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/play" element={<PlayingNavBar />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/TermsOfUse" element={<TermsOfUse />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/home" element={<Navbar />}>
            <Route index element={<Index />} />
            <Route path="Aboutus" element={<Aboutus />} />
            <Route
              path="MealPlanningRecipes"
              element={<MealPlanningRecipes />}
            />
            <Route path="ExistingEvents/" element={<ExistingEventsLanding />} />
            <Route path="ExistingEvents/:id" element={<ExistingEvents />} />
            <Route path="PlanYourOwnEvent" element={<PlanYourOwnEvent />} />
            {/* <Route path="Dashboard" element={<Dashboard />} /> */}
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
