import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Edit_profile from "./Components/Edit_profile";
import Myshope from "./pages/Myshope";
import Order_history from "./pages/Order_history";
import Settings from "./pages/Settings";
import Wallet from "./pages/Wallet";
import Contact_us from "./pages/Contact_us";
import Cart from "./pages/Cart";
import HeroSection from "./Components/HeroSection";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import Shops from "./pages/Shops";
import SingleProductDetailPage from "./pages/SingleProductDetailPage";
import Search from "./pages/Search";
import Scrapyard from "./pages/Scrapyard";
import Digitalassets from "./pages/Digitalassets";
import Privacysecurity from "./Components/Privacysecurity";
import Privacynpolices from "./Components/Privacynpolices";
import Changepassword from "./Components/Changepassword";
import Helpnsupport from "./Components/Helpnsupport";
import Singleshope from "./pages/Singleshope";
import { useSelector } from "react-redux";
import { selectUser, setUser } from "./redux/user/userSlice";
import { auth } from "./hooks/auth";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./Components/authMiddlware/ProtectedRoute";
import Checkout from "./pages/Checkout";
import LatestProduct from "./pages/LatestProduct";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ForgotPassword from "./Components/Forgetpassword";
import OrderConfirmationPagecash from "./pages/OrderConfirmationPagecash";
import ScrapyardSingleProduct from "./pages/ScrapyardSingleProduct";
import View_3d_model from "./pages/View_3d_model";
import ImageUpload from "./Components/3d view/ImageUplaod"; 
import ThreeScene from "./Components/3d view/ThreeScene";
import Dashboard_Layout from "./Layouts/Dashboard_Layout";
import Profile_Layout from "./Layouts/Profile_Layout";

import ContractForm from "./Components/ContractForm";

import DigitalSingleProduct from "./pages/DigitalSingleProduct";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = () => {
      try {
        const user = auth();
        dispatch(setUser(user));
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();

    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="content">
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Edit_profile" element={<Edit_profile />} />
        <Route path="/Order_history" element={<Order_history />} />
        <Route
          path="/Settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Wallet"
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Myshope"
          element={
            <ProtectedRoute>
              <Myshope />
            </ProtectedRoute>
          }
        />
        <Route path="/Contact_us" element={<Contact_us />} />
        <Route
          path="/Cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Shops" element={<Shops />} />
        <Route path="/ProductDetail" element={<SingleProductDetailPage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Digitalassets" element={<Digitalassets />} />
        <Route path="/Scrapyard" element={<Scrapyard />} />
        <Route path="/Privacysecurity" element={<Privacysecurity />} />
        <Route path="/Privacynpolices" element={<Privacynpolices />} />
        <Route path="/Changepassword" element={<Changepassword />} />
        <Route path="/Helpnsupport" element={<Helpnsupport />} />
        <Route path="/Singleshope" element={<Singleshope />} />
        <Route path="/ScrapProductDetail" element={<ScrapyardSingleProduct />} />
        <Route path="/DigitalProductDetail" element={<DigitalSingleProduct />} />
        <Route path="/Dashboard_Layout" element={<Dashboard_Layout />} />
        <Route path="/Profile_Layout" element={<Profile_Layout />} />
        <Route path="/contract" element={<ContractForm />} />

        <Route
          path="/Checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/LatestProduct" element={<LatestProduct />} />
        <Route path="/View_3d_model" element={<ThreeScene/> } />
        
        <Route
          path="/orderConfirmation"
          element={
            <ProtectedRoute>
              <OrderConfirmationPage />
            </ProtectedRoute>
          }
        /><Route
        path="/orderConfirmationcash"
        element={
          <ProtectedRoute>
            <OrderConfirmationPagecash />
          </ProtectedRoute>
        }
      />
    
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
};

export default App;
