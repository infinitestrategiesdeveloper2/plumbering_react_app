import React from "react";
import { Phone, Mail, MapPin   } from 'lucide-react';
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function MainNavbar() {

    const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="relative flex justify-between items-center py-10 px-50 shadow-sm overflow-hidden bg-white">
        {/* Amber slanted background shape */}
        <div
          className="absolute top-0 left-0 h-full w-[80%] bg-[#0A3D62] z-10"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          }}
        ></div>

        <div className="flex gap-26 z-10 text-white">
          <h1 className="font-bold text-2xl">Logo</h1>
          <ul className="flex gap-8 text-lg cursor-pointer">
            <Link to={'/'} className="hover:text-amber-300">Home</Link>
            <li onClick={() => handleScroll("about")} className="hover:text-amber-300">About Us</li>
            <li onClick={() => handleScroll("services")} className="hover:text-amber-300">Services</li>
            <li onClick={() => handleScroll("calltoaction")} className="hover:text-amber-300">Contact</li>
            <Link to={'/refund-policy'} className="hover:text-amber-300">Refund Policy</Link>
          </ul>
        </div>

        <button className="p-3 px-5 border text-lg z-10 bg-[#0A3D62] text-white cursor-pointer hover:opacity-90 ">
          <div className="flex gap-2 items-center "><Phone className='w-3.5 '/> <span>+19083142247</span></div></button>
      </div>
    </>
  );
}

export default MainNavbar;
