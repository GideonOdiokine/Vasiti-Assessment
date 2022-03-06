import React from "react";
import img_1 from "../assets/img_1.png";

import "./styles/userProfile.scss";

const UsersProfile = () => {
  return (
    <div className="u__profile">
      <div className="container">
        <div className="grid__container">
          <div className="grid__item">
            <div className="card">
              <img src={img_1} alt="user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersProfile;
