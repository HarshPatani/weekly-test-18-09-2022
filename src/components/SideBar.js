import React from "react";
import profile from "../assets/profile.jpg";
import { AiOutlineHome, AiOutlineGift, AiOutlineBank } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="profile">
          <img className="profile-img" src={profile} alt="Profile" />
          <h3>Harsh Patani</h3>
        </div>
      </div>
      <div className="sidebar sidebar-list">
        <li>
          <AiOutlineHome />
          Home
        </li>
        <li>
          <RiLuggageDepositLine />
          Deposits
        </li>
        <li>
          <AiOutlineGift />
          Offers
        </li>
        <li>
          <AiOutlineBank />
          Payments
        </li>
        <li>
          <FiSettings />
          Settings
        </li>
      </div>
    </>
  );
}

export default SideBar;
