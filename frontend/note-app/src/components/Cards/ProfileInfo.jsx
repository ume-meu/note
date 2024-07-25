import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({userInfo, onLogout}) => {
  return (
    userInfo && (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-[#b9c4e8]">
          {getInitials(userInfo.fullName)}
        </div>

        <div>
          <p className="text-sm font-medium text-[#bfc8e9] uppercase">{userInfo.fullName}</p>
          <button className="text-sm text-[#6d7bca] underline" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfo;
