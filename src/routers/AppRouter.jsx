import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import React from "react";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/*<Route path="/login" element={<LoginScreen />} />*/}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          {/*<Route path="/*" element={<DashboardRoutes />} />*/}
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
