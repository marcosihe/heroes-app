import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import React from "react";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
          {/*<Route path="/*" element={<DashboardRoutes />} />*/}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
