import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Header&Footer/Header";
import Footer from "./Components/Header&Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import VenueDetails from "./Pages/VenueDetails";
import VenueManagerProfile from "./Pages/VenueManagerProfile";
import CustomerProfile from "./Pages/CustomerProfile";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

function App() {
  return (
 <main>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Login/" element={<Login />} />
      <Route path="Register/" element={<Register />} />
      <Route path="VenueDetails" element={<VenueDetails />} />
      <Route path="VenueManagerProfile" element={<VenueManagerProfile />} />
      <Route path="CustomerProfile" element={<CustomerProfile />} />
    </Route>
  </Routes>
 </main>
  )
};

export default App
