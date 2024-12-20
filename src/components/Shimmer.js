import React from "react";

const Shimmer = () => {
  return (
    <div className="profile-card flex flex-col sm:flex-row bg-slate-50 rounded-xl w-full sm:w-auto h-auto sm:h-60 shadow-md align-middle justify-center items-center p-6">
      <div className="image-container rounded-lg w-40 sm:w-52 h-48 bg-slate-100"></div>
      <div className="details w-full sm:ml-5 mt-4 sm:mt-0">
        <div className="name w-full space-y-3">
          <div className="bg-slate-100 w-24 sm:w-32 h-7"></div>
          <div className="bg-slate-100 w-24 sm:w-32 h-7"></div>
          <div className="bg-slate-100 w-24 sm:w-32 h-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
