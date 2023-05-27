import { Routes, Route, Outlet } from "react-router-dom";
import HeaderNav from "./Components/Header&Footer/Header";
import FooterNav from "./Components/Header&Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import VenueDetails from "./Pages/VenueDetails";
import Logout from "./Pages/Logout";
import EditDelete from "./Pages/EditDelete";

const Layout = () => {
  return (
    <div>
      <HeaderNav />
      <Outlet/>
      <FooterNav />
    </div>
  )
};

function App() {
  return (
 <main style={{ backgruondColor: "blue"}} >
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Login/" element={<Login />} />
      <Route path="Register/" element={<Register />} />
      <Route path="VenueDetails/:id" element={<VenueDetails />} />
      <Route path="EditDelete/:id" element={<EditDelete />} />
      <Route path="Logout" element={<Logout />} />
    </Route>
  </Routes>
 </main>
  )
};

export default App
