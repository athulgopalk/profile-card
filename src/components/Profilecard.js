import React from "react";

const Profilecard = ({ cardDetails }) => {
  return (
    <div className="profile-card flex flex-col md:flex-row bg-white rounded-xl w-auto p-6 shadow-md">
      <div className="image-container w-full md:w-60  md:mr-5 hover:scale-95 transition-all">
        <img
          src={cardDetails.picture.large}
          alt="Profile"
          className="w-full h-48 md:h-48 rounded-lg object-cover"
        />
      </div>
      <div className="details w-full mt-4 md:mt-0">
        <div className="name w-full space-y-3">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-105 transition-all">
            {cardDetails.name.first} {cardDetails.name.last}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            {cardDetails.gender}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            {cardDetails.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
