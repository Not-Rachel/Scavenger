import { div } from "framer-motion/client";
import React from "react";
import ScavNav from "../components/ScavNav";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  if (auth === null || auth.isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (auth.isAuthorized === false) {
    navigate("/scavenger/login");
  }
  return (
    <div>
      <ScavNav></ScavNav>
      <div>Profile</div>
      <button
        onClick={() => {
          auth.logout();
          navigate("/scavenger/login");
        }}
        className="border-2 border-white m-4 p-2 text-bold"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;

//rafce for default
