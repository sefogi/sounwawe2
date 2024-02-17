import { NavBar } from "./Navbar/NavBar";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const Layoud = () => {
    const location = useLocation ();
    const isHomePage = location.pathname === "/";
    const isJoinPage = location.pathname === "/join"
  return (
    
    
    <>
      { !isJoinPage && <NavBar />}
      <Outlet />
     {! isHomePage && <Footer/>}
    </>
  );
}
