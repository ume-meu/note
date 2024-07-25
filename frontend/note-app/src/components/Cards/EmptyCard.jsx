import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
      <div className="flex flex-col items-center justify-center h-screen mt-[-40px]"> {/* Add h-screen to make it full screen height */}
        <div className="flex flex-col items-center justify-center"> {/* Wrap content in a new div to apply centering */}
          <img src={imgSrc} alt="No notes" className="w-60" />
          <p className="text-sm font-medium text-[#3a4d93] text-center leading-7 mt-5">
            {message}
          </p>
        </div>
      </div>
  );
};

export default EmptyCard;