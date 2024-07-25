import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaLock } from "react-icons/fa6";

const Password = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="box">
      <FaLock size={22} className="icon" />
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 outline-none"
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="eye"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="eye"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default Password;
