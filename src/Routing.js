import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Innerpages/Home";
import AboutUs from "./Innerpages/AboutUs";
import Courses from "./Innerpages/Courses";
import ContactUs from "./Innerpages/ContactUs";
import Gallery from "./Innerpages/Gallery";
import NoPage from "./Innerpages/NoPage";

const Routing = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default Routing;
