import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import PetChatBot from "./Components/PetChatBot";
import Allergies from "./pages/Allergies";
import Breed from "./pages/Breed";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import DogBirthday from "./pages/DogBirthday";
import DogIntroForm from "./pages/DogIntroForm";
import DogSizeSelector from "./pages/DogSizeSelector";
import EmailSection from "./pages/EmailSection";
import PlushToys from "./pages/PlushToys";
import PricingPlan from "./pages/PricingPlan";
import ThankYouPage from "./pages/ThankYouPage";
import ToySelector from "./pages/ToySelector";

import { SiteDataProvider } from "./context/SiteDataContext";
import DogPic from "./pages/DogPic";

function App() {
  return (
    <SiteDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petchat" element={<PetChatBot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/toy-selector" element={<ToySelector />} />
          <Route path="/plush-toys" element={<PlushToys />} />
          <Route path="/identity-form" element={<DogIntroForm />} />
          <Route path="/dog-size-selector" element={<DogSizeSelector />} />
          <Route path="/dog-breed" element={<Breed />} />
          <Route path="/adoption-date-step" element={<DogBirthday />} />
          <Route path="/food-preferences" element={<Allergies />} />
          <Route path="/dog-image-upload" element={<DogPic />} />
          <Route path="/you-email" element={<EmailSection />} />
          <Route path="/choose-pricing-plan" element={<PricingPlan />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Router>
    </SiteDataProvider>
  );
}

export default App;
