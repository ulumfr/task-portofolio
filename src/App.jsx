import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFoundPage from "./pages/notfound";
import HomePage from "./pages/home/home";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route
            path="/"
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
