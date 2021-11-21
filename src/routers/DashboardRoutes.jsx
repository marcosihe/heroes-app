import { Routes, Route } from "react-router-dom";

import React from "react";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import HeroScreen from "../components/heroes/HeroScreen";

const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <section className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />

          <Route path="/search" element={<SearchScreen />} />
          <Route path="/hero/:heroId" element={<HeroScreen />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </section>
    </div>
  );
};

export default DashboardRoutes;
