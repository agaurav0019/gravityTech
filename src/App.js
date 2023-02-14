import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ERPDevelopment from "./pages/ERPDevelopment";
import CloudManagement from "./pages/CloudManagement";
import ViewDetails from "./pages/ViewDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
        <Route path="/web" element={<WebsiteDevelopment></WebsiteDevelopment>}></Route>
        <Route path="/app" element={<AppDevelopment></AppDevelopment>}></Route>
        <Route path="/erp" element={<ERPDevelopment></ERPDevelopment>}></Route>
        <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
        <Route path="/cloud" element={<CloudManagement></CloudManagement>}></Route>
        <Route path="/viewDetails" element={<ViewDetails></ViewDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
