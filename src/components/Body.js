import React, { useEffect, useState } from "react";
import Profilecard from "./Profilecard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [profileCard, setProfileCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const data = await response.json();
      console.log(data);
      setProfileCard(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full h-[100vh] p-10 flex justify-center items-center bg-custom-blue">
      {profileCard.length === 0 ? (
        <Shimmer/>
      ) : (
        profileCard.map((cardDetails) => (
          <Profilecard key={cardDetails.login.uuid} cardDetails={cardDetails} />
        ))
      )}
    </div>
  );
};

export default Body;
