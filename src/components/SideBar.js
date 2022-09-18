import React from "react";
import profile from "../assets/profile.jpg";
import { AiOutlineHome, AiOutlineGift, AiOutlineBank } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <div className="">
          <img className="profile-img" src={profile} alt="Profile" />
          <p>
            <b>Harsh Patani</b>
          </p>
        </div>
      </div>
      <div className="sidebar-list">
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
    </div>
  );
}

export default SideBar;
