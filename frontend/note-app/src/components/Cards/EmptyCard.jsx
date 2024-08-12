import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
      <div className="flex flex-col items-center justify-center h-screen mt-[-40px]">
        <div className="flex flex-col items-center justify-center">
          <img src={imgSrc} alt="No notes" className="w-60" />
          <p className="text-sm font-medium text-[#120249] text-center leading-7 mt-5">
            {message}
          </p>
        </div>
      </div>
  );
};

export default EmptyCard;